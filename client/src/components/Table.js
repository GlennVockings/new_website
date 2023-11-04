import { TableRow } from "./TableRow";
import { mainTeam } from "../helpers/constants";
import { isMobile } from "../helpers/helper-funcs";

export const Table = ({ leagueTable }) => {
  return (
    <div className="container mx-auto overflow-scroll">
      <table className="league-table">
        <thead>
          <tr>
            <th colSpan="2">Name</th>
            <th>{`${isMobile ? "Pl" : "Played"}`}</th>
            <th>{`${isMobile ? "W" : "Wins"}`}</th>
            <th>{`${isMobile ? "D" : "Draws"}`}</th>
            <th>{`${isMobile ? "L" : "Loses"}`}</th>
            <th>{`${isMobile ? "F" : "For"}`}</th>
            <th>{`${isMobile ? "A" : "Against"}`}</th>
            <th>{`${isMobile ? "D" : "Diff."}`}</th>
            <th>{`${isMobile ? "P" : "Points"}`}</th>
          </tr>
        </thead>
        <tbody>
          {leagueTable.map((entry, index) => {
            return (
              <TableRow
                key={index}
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
