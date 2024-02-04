import { GET_FIXTURES } from "../queries/fixtureQueries";
import { Loading } from "../components/Loading";
import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { calculatesTableData } from "../helpers/helper-funcs";
import { mainTeam } from "../helpers/constants";
import { SlimTableRow } from "./SlimTableRow";

export const SlimTable = () => {
  const [leagueTable, setLeagueTable] = useState([]);

  const { loading, data } = useQuery(GET_FIXTURES);

  useEffect(() => {
    if (data) {
      const table = calculatesTableData(data.fixtures);
      setLeagueTable(table);
    }
  }, [data]);

  if (loading) return <Loading />;

  return (
    <div className="lg:container mx-auto">
      <table className="league-table-slim">
        <thead>
          <tr>
            <th colSpan="2" className="name-header">
              Name
            </th>
            <th>P</th>
            <th className="lg:hidden">W</th>
            <th className="hidden sm:table-cell lg:hidden">D</th>
            <th className="hidden sm:table-cell lg:hidden">L</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {leagueTable.map((entry, index) => {
            if (entry.show)
              return (
                <SlimTableRow
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
