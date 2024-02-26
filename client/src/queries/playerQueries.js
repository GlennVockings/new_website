import { gql } from "@apollo/client";

export const GET_PLAYERS = gql`
  {
    players {
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

export const STATS = gql`
  query stats {
    stats {
      id
      name
      number
      position
      appearances
      goals
      cleanSheets
    }
  }
`;
