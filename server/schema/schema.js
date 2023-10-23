// Mongoose models
const Week = require("../models/Week.js");
const Fixture = require("../models/Fixture.js");
const Player = require("../models/Player.js");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
} = require("graphql");

// Week Type
const WeekType = new GraphQLObjectType({
  name: "Week",
  fields: () => ({
    id: { type: GraphQLID },
    week: { type: GraphQLInt },
    wc: { type: GraphQLString },
    status: { type: GraphQLString },
  }),
});

// Fixture Type
const FixtureType = new GraphQLObjectType({
  name: "Fixture",
  fields: () => ({
    id: { type: GraphQLID },
    homeTeam: { type: GraphQLString },
    awayTeam: { type: GraphQLString },
    time: { type: GraphQLString },
    date: { type: GraphQLString },
    venue: { type: GraphQLString },
    homeScore: { type: GraphQLInt },
    awayScore: { type: GraphQLInt },
    hoa: { type: GraphQLString },
    status: { type: GraphQLString },
    week: {
      type: WeekType,
      resolve(parent, args) {
        return Week.findById(parent.weekId);
      },
    },
  }),
});

// Player Type
const PlayerType = new GraphQLObjectType({
  name: "Player",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    number: { type: GraphQLInt },
    position: { type: GraphQLString },
    appearances: { type: GraphQLInt },
    goals: { type: GraphQLInt },
    penalties: { type: GraphQLInt },
    assists: { type: GraphQLInt },
    yellowCards: { type: GraphQLInt },
    redCards: { type: GraphQLInt },
    started: { type: GraphQLInt },
    mom: { type: GraphQLInt },
    cleanSheets: { type: GraphQLInt },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    weeks: {
      type: new GraphQLList(WeekType),
      async resolve(parent, args) {
        const timeNow = Date.now();

        const weeks = await Week.find();

        const weeksWithStatus = weeks.map((week) => {
          const [day, month, year] = week.wc.split("/").map(Number);
          const dateObject = new Date(year, month - 1, day);

          return {
            ...week._doc,
            id: week._id,
            status: dateObject < timeNow ? "Completed" : "Upcoming",
          };
        });

        return weeksWithStatus;
      },
    },
    fixtures: {
      type: new GraphQLList(FixtureType),
      async resolve(parent, args) {
        const fixtures = await Fixture.find().populate("weekId").exec();

        fixtures.sort((a, b) => a.weekId.week - b.weekId.week);

        const timeNow = Date.now();

        const modifiedFixtures = fixtures.map((fixture) => {
          const [day, month, year] = fixture.date.split("/").map(Number);
          const dateObject = new Date(year, month - 1, day);

          return {
            ...fixture._doc,
            status: dateObject < timeNow ? "Completed" : "Upcoming",
          };
        });

        return modifiedFixtures;
      },
    },
    players: {
      type: new GraphQLList(PlayerType),
      resolve(parent, args) {
        return Player.find();
      },
    },
    fixture: {
      type: FixtureType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Fixture.findById(args.id);
      },
    },
    latestResult: {
      type: FixtureType,
      args: {
        teamName: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const filteredFixtures = await Fixture.find({
          $or: [{ homeTeam: args.teamName }, { awayTeam: args.teamName }],
        });

        filteredFixtures.forEach((fixture) => {
          const [day, month, year] = fixture.date.split("/").map(Number);
          fixture.dateObject = new Date(year, month - 1, day);
        });

        const currentDate = Date.now();

        const pastObjects = filteredFixtures.filter(
          (obj) => obj.dateObject < currentDate
        );

        const fixturesWithHoa = pastObjects.map((fixture) => ({
          ...fixture._doc,
          hoa: fixture.homeTeam === args.teamName ? "Home" : "Away",
        }));

        fixturesWithHoa.sort((a, b) => b.dateObject - a.dateObject);

        return fixturesWithHoa[0];
      },
    },
    latestFixture: {
      type: FixtureType,
      args: {
        teamName: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const filteredFixtures = await Fixture.find({
          $or: [{ homeTeam: args.teamName }, { awayTeam: args.teamName }],
        });

        filteredFixtures.forEach((fixture) => {
          const [day, month, year] = fixture.date.split("/").map(Number);
          fixture.dateObject = new Date(year, month - 1, day);
        });

        const currentDate = Date.now();

        const futureObjects = filteredFixtures.filter(
          (obj) => obj.dateObject > currentDate
        );

        futureObjects.sort((a, b) => a.dateObject - b.dateObject);

        return futureObjects[0];
      },
    },
    week: {
      type: WeekType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Week.findById(args.id);
      },
    },
    teamFixtures: {
      type: new GraphQLList(FixtureType),
      args: {
        teamName: { type: GraphQLString },
      },
      async resolve(parent, args) {
        const timeNow = Date.now();

        const filteredFixtures = await Fixture.find({
          $or: [{ homeTeam: args.teamName }, { awayTeam: args.teamName }],
        });

        const modifiedFixtures = filteredFixtures.map((fixture) => {
          const [day, month, year] = fixture.date.split("/").map(Number);
          const dateObject = new Date(year, month - 1, day);

          return {
            ...fixture._doc,
            hoa: fixture.homeTeam === args.teamName ? "Home" : "Away",
            status: dateObject < timeNow ? "Completed" : "Upcoming",
          };
        });

        return modifiedFixtures;
      },
    },
    table: {
      type: new GraphQLList(FixtureType),
      args: {
        week: { type: GraphQLID },
      },
      async resolve(parent, args) {
        // You can use MongoDB's $lte (less than or equal) operator to filter fixtures
        const fixturesForWeekAndPrevious = await Fixture.find({
          weekId: { $lte: args.week },
        });

        return fixturesForWeekAndPrevious;
      },
    },
  },
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    // Fixture Mutations
    addFixture: {
      type: FixtureType,
      args: {
        homeTeam: { type: GraphQLNonNull(GraphQLString) },
        awayTeam: { type: GraphQLNonNull(GraphQLString) },
        time: { type: GraphQLNonNull(GraphQLString) },
        date: { type: GraphQLNonNull(GraphQLString) },
        venue: { type: GraphQLNonNull(GraphQLString) },
        homeScore: { type: GraphQLNonNull(GraphQLInt) },
        awayScore: { type: GraphQLNonNull(GraphQLInt) },
        hoa: { type: GraphQLNonNull(GraphQLString) },
        weekId: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const fixture = new Fixture({
          homeTeam: args.homeTeam,
          awayTeam: args.awayTeam,
          time: args.time,
          date: args.date,
          venue: args.venue,
          homeScore: args.homeScore,
          awayScore: args.awayScore,
          weekId: args.weekId,
          hoa: args.hoa,
        });

        return fixture.save();
      },
    },
    deleteFixture: {
      type: FixtureType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Fixture.findByIdAndRemove(args.id);
      },
    },
    updateFixture: {
      type: FixtureType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        homeTeam: { type: GraphQLString },
        awayTeam: { type: GraphQLString },
        time: { type: GraphQLString },
        date: { type: GraphQLString },
        venue: { type: GraphQLString },
        homeScore: { type: GraphQLInt },
        awayScore: { type: GraphQLInt },
        hoa: { type: GraphQLString },
        weekId: { type: GraphQLID },
      },
      resolve(parent, args) {
        return Fixture.findByIdAndUpdate(
          args.id,
          {
            $set: {
              homeTeam: args.homeTeam,
              awayTeam: args.awayTeam,
              time: args.time,
              date: args.date,
              venue: args.venue,
              homeScore: args.homeScore,
              awayScore: args.awayScore,
              hoa: args.hoa,
              weekId: args.weekId,
            },
          },
          { new: true }
        );
      },
    },
    // Week Mutations
    addWeek: {
      type: WeekType,
      args: {
        week: { type: GraphQLNonNull(GraphQLInt) },
        wc: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const week = new Week({
          week: args.week,
          wc: args.wc,
          status: args.status,
        });

        return week.save();
      },
    },
    deleteWeek: {
      type: WeekType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Week.findByIdAndRemove(args.id);
      },
    },
    updateWeek: {
      type: WeekType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        week: { type: GraphQLInt },
        wc: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Week.findByIdAndUpdate(
          args.id,
          {
            $set: {
              week: args.week,
              wc: args.wc,
              status: args.status,
            },
          },
          { new: true }
        );
      },
    },
    // Player Mutations
    addPlayer: {
      type: PlayerType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        number: { type: GraphQLNonNull(GraphQLInt) },
        position: { type: GraphQLNonNull(GraphQLString) },
        appearances: { type: GraphQLNonNull(GraphQLInt) },
        goals: { type: GraphQLNonNull(GraphQLInt) },
        penalties: { type: GraphQLNonNull(GraphQLInt) },
        assists: { type: GraphQLNonNull(GraphQLInt) },
        yellowCards: { type: GraphQLNonNull(GraphQLInt) },
        redCards: { type: GraphQLNonNull(GraphQLInt) },
        started: { type: GraphQLNonNull(GraphQLInt) },
        mom: { type: GraphQLNonNull(GraphQLInt) },
        cleanSheets: { type: GraphQLNonNull(GraphQLInt) },
      },
      resolve(parent, args) {
        const player = new Player({
          name: args.name,
          number: args.number,
          position: args.position,
          appearances: args.appearances,
          goals: args.goals,
          penalties: args.penalties,
          assists: args.assists,
          yellowCards: args.yellowCards,
          redCards: args.redCards,
          started: args.started,
          mom: args.mom,
          cleanSheets: args.cleanSheets,
        });

        return player.save();
      },
    },
    deletePlayer: {
      type: PlayerType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Player.findByIdAndRemove(args.id);
      },
    },
    updatePlayer: {
      type: PlayerType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        number: { type: GraphQLInt },
        position: { type: GraphQLString },
        appearances: { type: GraphQLInt },
        goals: { type: GraphQLInt },
        penalties: { type: GraphQLInt },
        assists: { type: GraphQLInt },
        yellowCards: { type: GraphQLInt },
        redCards: { type: GraphQLInt },
        started: { type: GraphQLInt },
        mom: { type: GraphQLInt },
        cleanSheets: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return Player.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              number: args.number,
              position: args.position,
              appearances: args.appearances,
              goals: args.goals,
              penalties: args.penalties,
              assists: args.assists,
              yellowCards: args.yellowCards,
              redCards: args.redCards,
              started: args.started,
              mom: args.mom,
              cleanSheets: args.cleanSheets,
            },
          },
          { new: true }
        );
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: mutation,
});
