import { TableRow } from "../components/TableRow";
import { calculatesTableData } from "../helpers/helper-funcs";

import { gql, useQuery } from "@apollo/client";

const GET_FIXTURES = gql`
  query {
    getFixtures {
      fixtures {
        homeTeam
        homeScore
        awayTeam
        awayScore
        time
        date
        venue
        status
        week {
          week
        }
      }
    }
  }
`;

export const Table = () => {
  const { loading, data, error } = useQuery(GET_FIXTURES);

  if (loading) return <p>Loading...</p>;

  const leagueTable = calculatesTableData(data.fixtures);
  leagueTable.sort((a, b) => b.points - a.points);

  return (
    <div className="container mx-auto">
      <table className="league-table">
        <thead>
          <tr>
            <th>Pos.</th>
            <th>Name</th>
            <th>Played</th>
            <th>Wins</th>
            <th>Draws</th>
            <th>Loses</th>
            <th>For</th>
            <th>Against</th>
            <th>Diff.</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {leagueTable &&
            leagueTable.map((entry, index) => {
              return (
                <TableRow
                  position={index + 1}
                  entry={entry}
                  cssClass={entry.name === "Oxted FC" ? "home" : ""}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
