import { useQuery } from "@apollo/client";
import { GET_LATEST_FIXTURE } from "../queries/fixtureQueries";
import { mainTeam } from "../helpers/constants";
import { Loading } from "./Loading";
import { GiSoccerField } from "react-icons/gi";
import { IconContext } from "react-icons";

export const SlimFixture = () => {
  const { loading, data } = useQuery(GET_LATEST_FIXTURE, {
    variables: {
      teamName: mainTeam,
    },
  });

  if (loading) return <Loading />;

  return (
    <div className="container p-2 min-h-28 font-cursive">
      <p className="text-xs">Next match</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center border-r p-3 w-32">
          <img
            className="bg-cover"
            src={`../assets/images/${
              data.latestFixture.homeTeam === mainTeam
                ? data.latestFixture.awayTeam.split(" ").join("-").toLowerCase()
                : data.latestFixture.homeTeam.split(" ").join("-").toLowerCase()
            }.png`}
            alt={`${
              data.latestFixture.homeTeam === mainTeam
                ? data.latestFixture.awayTeam.split(" ").join("-")
                : data.latestFixture.homeTeam.split(" ").join("-")
            }.png`}
          />
        </div>
        <div
          className={`flex justify-between items-center px-3 w-full relative overflow-hidden`}
        >
          <div className="h-28 overflow-hidden relative flex flex-col items-start justify-center gap-1">
            <div className="flex gap-2">
              <p>{data.latestFixture.date}</p>
              <p>{data.latestFixture.time}</p>
            </div>
            <p className="text-3xl font-bold">
              {data.latestFixture.homeTeam === mainTeam
                ? data.latestFixture.awayTeam
                : data.latestFixture.homeTeam}
            </p>
            <div className="flex">
              <IconContext.Provider value={{ size: "1.5rem" }}>
                <div className="pr-1">
                  <GiSoccerField />
                </div>
              </IconContext.Provider>
              <p>{data.latestFixture.venue}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
