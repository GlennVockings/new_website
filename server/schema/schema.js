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
      resolve(parent, args) {
        return Week.find();
      },
    },
    fixtures: {
      type: new GraphQLList(FixtureType),
      resolve(parent, args) {
        return Fixture.find();
      },
    },
    players: {
      type: new GraphQLList(PlayerType),
      resolve(parent, args) {
        return Player.find();
      },
    },
  },
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
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
        status: {
          type: new GraphQLEnumType({
            name: "FixtureStatus",
            values: {
              new: { value: "Not Started" },
              progress: { value: "In Progress" },
              completed: { value: "Completed" },
            },
          }),
          defaultValue: "Not Started",
        },
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
          status: args.status,
          weekId: args.weekId,
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
    addWeek: {
      type: WeekType,
      args: {
        week: { type: GraphQLNonNull(GraphQLInt) },
        wc: { type: GraphQLNonNull(GraphQLString) },
        status: { type: GraphQLNonNull(GraphQLString) },
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
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: mutation,
});
