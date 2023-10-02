import { useQuery } from "@apollo/client";
import { GET_LATEST_RESULT } from "../queries/fixtureQueries";
import { mainTeam } from "../helpers/constants";
import { Loading } from "./Loading";
import { BiDetail } from "react-icons/bi";

export const SlimResults = () => {
  const { loading, data } = useQuery(GET_LATEST_RESULT, {
    variables: { teamName: mainTeam },
  });

  if (loading) return <Loading />;

  return (
    <div className="container p-2 min-h-28 font-cursive">
      <div className="flex">
        <p className="text-xs">Latest result -</p>
        <div className="flex pl-2 gap-1 text-xs">
          <p>{data.latestResult.date}</p>
          <p>{data.latestResult.time}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center border-r p-3 w-28">
          <img
            className="bg-cover"
            src={`../assets/images/${
              data.latestResult.homeTeam === mainTeam
                ? data.latestResult.awayTeam.split(" ").join("-").toLowerCase()
                : data.latestResult.homeTeam.split(" ").join("-").toLowerCase()
            }.png`}
            alt={`${
              data.latestResult.homeTeam === mainTeam
                ? data.latestResult.awayTeam.split(" ").join("-")
                : data.latestResult.homeTeam.split(" ").join("-")
            }.png`}
          />
        </div>
        <div
          className={`flex justify-between items-center px-3 w-full relative overflow-hidden`}
        >
          <div className="h-28 overflow-hidden relative flex flex-col gap-3 items-start justify-center">
            <div
              className={`flex divide-x-2 ${
                data.latestResult.homeTeam === mainTeam
                  ? "divide-primary text-primary"
                  : "divide-gray-500"
              }`}
            >
              <p className="text-2xl font-semibold min-w-2">
                {data.latestResult.homeScore}
              </p>
              <p className="text-2xl font-semibold pl-3">
                {data.latestResult.homeTeam}
              </p>
            </div>
            <div
              className={`flex divide-x-2 ${
                data.latestResult.awayTeam === mainTeam
                  ? "divide-primary text-primary"
                  : "divide-gray-500"
              }`}
            >
              <p className="text-2xl font-semibold min-w-2">
                {data.latestResult.awayScore}
              </p>
              <p className="text-2xl font-semibold pl-3">
                {data.latestResult.awayTeam}
              </p>
            </div>
          </div>
        </div>
        {data.latestResult.highlights && (
          <div className="border-l p-3 w-1/4 ">
            <button className={`btn btn-primary`}>
              Details
              <BiDetail />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
