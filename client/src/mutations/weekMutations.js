import { gql } from "@apollo/client";

export const UPDATE_WEEK = gql`
  mutation updateWeek($id: ID!, $week: Int!, $wc: String!) {
    updateWeek(id: $id, week: $week, wc: $wc) {
      id
      week
      wc
    }
  }
`;

export const ADD_WEEK = gql`
  mutation addWeek($week: Int!, $wc: String!) {
    addWeek(week: $week, wc: $wc) {
      week
      wc
    }
  }
`;
