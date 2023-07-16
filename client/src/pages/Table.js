import { TableRow } from "../components/TableRow";
import { dummyTable } from "../dummyData";
import { calculatesTableData } from "../helpers/helper-funcs";

export const Table = () => {
  const leagueTable = calculatesTableData(dummyTable);
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
