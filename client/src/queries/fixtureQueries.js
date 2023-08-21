import { gql } from "@apollo/client";

export const GET_FIXTURES = gql`
  {
    fixtures {
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
    fixture(teamName: $teamName) {
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
