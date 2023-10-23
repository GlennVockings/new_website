import { gql } from "@apollo/client";

export const ADD_PLAYER = gql`
  mutation addPlayer(
    $name: String
    $number: int
    $position: String
    $appearances: int
    $started: int
    $cleanSheets: int
    $goals: int
    $penalties: int
    $assists: int
    $yellowCards: int
    $redCards: int
    $mom: int
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
    $name: String
    $number: int
    $position: String
    $appearances: int
    $started: int
    $cleanSheets: int
    $goals: int
    $penalties: int
    $assists: int
    $yellowCards: int
    $redCards: int
    $mom: int
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
