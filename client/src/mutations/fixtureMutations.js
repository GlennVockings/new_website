import { gql } from "@apollo/client";

export const ADD_FIXTURE = gql`
  mutation addFixture(
    $homeTeam: String!
    $awayTeam: String!
    $time: String!
    $date: String!
    $venue: String!
    $homeScore: Int!
    $awayScore: Int!
    $weekId: ID!
    $hoa: String!
  ) {
    addFixture(
      homeTeam: $homeTeam
      awayTeam: $awayTeam
      time: $time
      date: $date
      venue: $venue
      homeScore: $homeScore
      awayScore: $awayScore
      weekId: $weekId
      hoa: $hoa
    ) {
      id
      homeTeam
      awayTeam
      homeScore
      awayScore
      time
      date
      venue
      hoa
      week {
        week
      }
    }
  }
`;

export const UPDATE_FIXTURE = gql`
  mutation updateFixture(
    $id: ID!
    $homeTeam: String!
    $awayTeam: String!
    $time: String!
    $date: String!
    $venue: String!
    $homeScore: Int!
    $awayScore: Int!
    $weekId: ID!
    $hoa: String!
  ) {
    updateFixture(
      id: $id
      homeTeam: $homeTeam
      awayTeam: $awayTeam
      time: $time
      date: $date
      venue: $venue
      homeScore: $homeScore
      awayScore: $awayScore
      weekId: $weekId
      hoa: $hoa
    ) {
      id
      homeTeam
      awayTeam
      homeScore
      awayScore
      time
      date
      venue
      hoa
      week {
        week
      }
    }
  }
`;

export const DELETE_FIXTURE = gql`
  mutation deleteFixture($id: ID!) {
    deleteFixture(id: $id) {
      id
      homeTeam
      awayTeam
      homeScore
      awayScore
      time
      date
      venue
      week {
        week
      }
    }
  }
`;
