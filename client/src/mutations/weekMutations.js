import { gql } from "@apollo/client";

export const UPDATE_WEEK = gql`
  mutation updateWeek(
    $id: ID!
    $week: Int!
    $wc: String!
    $status: WeekStatusUpdate
  ) {
    updateWeek(id: $id, week: $week, wc: $wc, status: $status) {
      id
      week
      wc
      status
    }
  }
`;

export const ADD_WEEK = gql`
  mutation addWeek($week: Int!, $wc: String!, $status: WeekStatusUpdate) {
    addWeek(week: $week, wc: $wc, status: $status) {
      week
      wc
      status
    }
  }
`;
