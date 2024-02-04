import { gql } from "@apollo/client";

export const ADD_PLAYER = gql`
  mutation addPlayer(
    $name: String!
    $number: Int!
    $position: String!
    $appearances: Int!
    $started: Int!
    $cleanSheets: Int!
    $goals: Int!
    $penalties: Int!
    $assists: Int!
    $yellowCards: Int!
    $redCards: Int!
    $mom: Int!
  ) {
    addPlayer(
      name: $name
      number: $number
      position: $position
      appearances: $appearances
      started: $started
      cleanSheets: $cleanSheets
      goals: $goals
      penalties: $penalties
      assists: $assists
      yellowCards: $yellowCards
      redCards: $redCards
      mom: $mom
    ) {
      name
      number
      position
      appearances
      goals
      penalties
      assists
      yellowCards
      redCards
      started
      mom
      cleanSheets
    }
  }
`;

export const UPDATE_PLAYER = gql`
  mutation addPlayer(
    $id: ID!
    $name: String!
    $number: Int!
    $position: String!
    $appearances: Int!
    $started: Int!
    $cleanSheets: Int!
    $goals: Int!
    $penalties: Int!
    $assists: Int!
    $yellowCards: Int!
    $redCards: Int!
    $mom: Int!
  ) {
    addPlayer(
      id: $id
      name: $name
      number: $number
      position: $position
      appearances: $appearances
      started: $started
      cleanSheets: $cleanSheets
      goals: $goals
      penalties: $penalties
      assists: $assists
      yellowCards: $yellowCards
      redCards: $redCards
      mom: $mom
    ) {
      id
      name
      number
      position
      appearances
      goals
      penalties
      assists
      yellowCards
      redCards
      started
      mom
      cleanSheets
    }
  }
`;

export const DELETE_PLAYER = gql`
  mutation addPlayer($id: ID!) {
    addPlayer(id: $id) {
      id
      name
      number
      position
      appearances
      goals
      penalties
      assists
      yellowCards
      redCards
      started
      mom
      cleanSheets
    }
  }
`;
