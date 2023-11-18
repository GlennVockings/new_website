import { gql } from "@apollo/client";

export const GET_FIXTURES = gql`
  {
    fixtures {
      id
      homeTeam
      homeScore
      awayTeam
      awayScore
      time
      date
      venue
      hoa
      status
      week {
        week
      }
    }
  }
`;

export const GET_FIXTURE = gql`
  query getFixture($id: ID!) {
    fixture(id: $id) {
      id
      homeTeam
      homeScore
      awayTeam
      awayScore
      time
      date
      venue
      hoa
      week {
        id
        week
      }
    }
  }
`;

export const GET_LATEST_FIXTURE = gql`
  query getLatestFixture($teamName: String) {
    latestFixture(teamName: $teamName) {
      __typename
      ... on Fixture {
        id
        homeTeam
        homeScore
        awayTeam
        awayScore
        time
        date
        venue
        hoa
      }
      ... on FixtureNotFoundError {
        message
      }
    }
  }
`;

export const GET_LATEST_RESULT = gql`
  query getLatestResult($teamName: String) {
    latestResult(teamName: $teamName) {
      id
      homeTeam
      homeScore
      awayTeam
      awayScore
      time
      date
      venue
      hoa
    }
  }
`;

export const GET_TEAM_FIXTURES = gql`
  query getTeamFixtures($teamName: String) {
    teamFixtures(teamName: $teamName) {
      id
      homeTeam
      homeScore
      awayTeam
      awayScore
      time
      date
      venue
      hoa
      status
    }
  }
`;

export const GET_WEEK_FIXTURES = gql`
  query getWeekFixtures($week: ID!) {
    table(week: $week) {
      homeTeam
      homeScore
      awayTeam
      awayScore
      week {
        id
        week
      }
    }
  }
`;
