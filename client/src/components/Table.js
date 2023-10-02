import { TableRow } from "./TableRow";
import { mainTeam } from "../helpers/constants";

export const Table = ({ leagueTable }) => {
  return (
    <div className="container mx-auto overflow-scroll">
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
          {leagueTable.map((entry, index) => {
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
