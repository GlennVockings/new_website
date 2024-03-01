import { useQuery } from "@apollo/client";
import { GET_LATEST_FIXTURE } from "../queries/fixtureQueries";
import { mainTeam } from "../helpers/constants";
import { Loading } from "./ui/Loading";
import { GiSoccerField } from "react-icons/gi";
import { IconContext } from "react-icons";
import teamPlaceholder from "../images/team-placeholder.svg";

export const SlimFixture = () => {
  const { loading, data } = useQuery(GET_LATEST_FIXTURE, {
    variables: {
      teamName: mainTeam,
    },
  });

  if (loading) return <Loading />;

  return data.latestFixture.message ? (
    <div className="p-2 font-cursive">
      <p className="text-xs">Next match</p>
      <div className="flex items-center justify-start">
        <div className="flex items-center justify-center border-r p-1 md:p-3 w-20 md:w-32">
          <img
            className="bg-cover w-20"
            src={teamPlaceholder}
            alt="placeholder"
          />
        </div>
        <div
          className={`flex justify-between items-center px-3 w-auto relative overflow-hidden`}
        >
          <div className="h-28 overflow-hidden relative flex flex-col items-start justify-center gap-1">
            <p>No fixtures planned</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="p-2 font-cursive">
      <p className="text-xs">Next match</p>
      <div className="flex items-center justify-start md:justify-between">
        <div className="flex items-center border-r p-1 md:p-3 w-20 md:w-32">
          <img
            className="bg-cover"
            src={`../assets/images/${
              data.latestFixture.homeTeam === mainTeam
                ? data.latestFixture.awayTeam.replace(/ /g, "-").toLowerCase()
                : data.latestFixture.homeTeam.replace(/ /g, "-").toLowerCase()
            }.png`}
            alt={`${
              data.latestFixture.homeTeam === mainTeam
                ? data.latestFixture.awayTeam.replace(/ /g, "-")
                : data.latestFixture.homeTeam.replace(/ /g, "-")
            }.png`}
          />
        </div>
        <div
          className={`flex justify-between items-center px-3 w-auto relative overflow-hidden`}
        >
          <div className="h-28 overflow-hidden relative flex flex-col items-start justify-center gap-1">
            <div className="flex gap-2">
              <p>{data.latestFixture.date}</p>
              <p>{data.latestFixture.time}</p>
            </div>
            <p className="text-lg md:text-3xl font-bold truncate">
              {data.latestFixture.homeTeam === mainTeam
                ? data.latestFixture.awayTeam
                : data.latestFixture.homeTeam}
            </p>
            <div className="flex items-center">
              <IconContext.Provider value={{ size: "1.5rem" }}>
                <div className="pr-1">
                  <GiSoccerField />
                </div>
              </IconContext.Provider>
              <p className="text-sm">{data.latestFixture.venue}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
