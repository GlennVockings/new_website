import { gql } from "@apollo/client";

export const GET_WEEKS = gql`
  {
    weeks {
      week
      wc
      status
    }
  }
`;
