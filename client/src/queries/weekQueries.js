import { gql } from "@apollo/client";

export const GET_WEEKS = gql`
  {
    weeks {
      id
      week
      wc
      status
    }
  }
`;
