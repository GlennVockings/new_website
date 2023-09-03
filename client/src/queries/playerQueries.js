import { gql } from "@apollo/client";

export const GET_PLAYERS = gql`
  {
    players {
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
