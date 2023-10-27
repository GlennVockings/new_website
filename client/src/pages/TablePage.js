import { GET_WEEK_FIXTURES } from "../queries/fixtureQueries";
import { Loading } from "../components/Loading";
import { Table } from "../components/Table";
import { GET_WEEKS } from "../queries/weekQueries";
import { useQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { calculatesTableData } from "../helpers/helper-funcs";
import { Wrapper } from "../components/wrapper/Wrapper";

export const TablePage = () => {
  const [weeks, setWeeks] = useState([]); // Use useState to manage weeks state
  const [latestWeek, setLatestWeek] = useState("");
  const [leagueTable, setLeagueTable] = useState([]);

  const { loading: weeksLoading, data: weeksData } = useQuery(GET_WEEKS, {
    onCompleted: (data) => {
      setWeeks(data.weeks);
      data.weeks.forEach((week) => {
        console.log(week);
        if (week.status === "Completed") setLatestWeek(week.id);
      });
    },
  });

  const {
    loading: fixturesLoading,
    data: fixturesData,
    refetch,
  } = useQuery(GET_WEEK_FIXTURES, {
    skip: !weeksData,
    variables: {
      week: weeks.length > 0 ? latestWeek : null,
    },
  });

  useEffect(() => {
    if (fixturesData) {
      const table = calculatesTableData(fixturesData.table);
      setLeagueTable(table);
    }
  }, [fixturesData]);

  if (weeksLoading || fixturesLoading) return <Loading />;

  return (
    <Wrapper>
      <div className="py-3 flex flex-col items-center">
        <p className="text-lg">Weeks</p>
        <ul className="flex gap-x-3 overflow-auto w-full pb-3">
          {weeks.map((week) => {
            return (
              <li key={week.week}>
                <button
                  className={`btn ${
                    week.status === "Completed" ? "btn-primary" : "btn-disabled"
                  }`}
                  onClick={() => refetch({ week: week.id })}
                  value={week.id}
                >
                  {week.week}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <Table leagueTable={leagueTable} />
    </Wrapper>
  );
};
