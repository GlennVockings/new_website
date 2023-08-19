const { fixtures, weeks, players } = require("../sampleData.js");

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

module.exports = new GraphQLSchema({
  query: RootQuery,
});
