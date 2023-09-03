import { gql } from "@apollo/client";

export const ADD_FIXTURE = gql`
  mutation addFixture(
    $homeTeam: String!
    $awayTeam: String!
    $time: String!
    $date: String!
    $venue: String!
    $homeScore: int
    $awayScore: int
    $status: String!
    $weekId: ID!
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
    ) {
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
