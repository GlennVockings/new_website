import { TableRow } from "../components/TableRow";
import { calculatesTableData } from "../helpers/helper-funcs";
import { GET_FIXTURES } from "../queries/fixtureQueries";
import { useQuery } from "@apollo/client";
import { mainTeam } from "../helpers/constants";

export const Table = () => {
  const { loading, data } = useQuery(GET_FIXTURES);

  if (loading) return <p>Loading...</p>;

  const leagueTable = calculatesTableData(data.fixtures);

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
                  cssClass={entry.name === mainTeam ? "home" : ""}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
