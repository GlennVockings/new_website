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
      status
      hoa
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
      status
      hoa
      week {
        week
      }
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
      status
      hoa
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
      status
      week {
        id
        week
      }
    }
  }
`;
