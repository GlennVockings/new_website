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
    $status: FixtureStatus
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
      status: $status
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
      status
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
    $status: FixtureStatusUpdate
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
      status: $status
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
      status
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
      status
      week {
        week
      }
    }
  }
`;
