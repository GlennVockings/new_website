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

export const TOP_SCORER = gql`
  query topScorer {
    topScorer {
      name
      number
      position
      appearances
      goals
    }
  }
`;
