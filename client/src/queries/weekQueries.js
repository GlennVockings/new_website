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

export const GET_WEEK = gql`
  query getWeek($id: ID!) {
    week(id: $id) {
      id
      week
      wc
      status
    }
  }
`;
