import { GiSoccerField } from "react-icons/gi";
import { IconContext } from "react-icons";
import { mainTeam } from "../helpers/constants";

export const Fixture = ({ fixture }) => {
  return (
    <div className="container px-2 min-h-44 hover:shadow-xl font-cursive">
      {fixture.status !== "Upcoming" ? (
        <div className="flex flex-col justify-between relative">
          <div className="bg-tertiary absolute -rotate-90 -left-18 text-center text-white top-20 w-40">
            <p>{fixture.status}</p>
          </div>
          <div className="flex p-3 w-full ml-6 gap-3 relative md:w-1/4">
            <p className="text-center mb-1 text-sm md:text-xl">
              {fixture.date}
            </p>
            <p className="text-sm">{fixture.time}</p>
            <p className="text-center text-sm">{fixture.hoa}</p>
          </div>
          <div className="overflow-hidden relative p-3 w-full ml-6 flex flex-col gap-3 items-start justify-center">
            <div
              className={`flex items-center divide-x-2 ${
                fixture.homeTeam === mainTeam
                  ? "divide-primary text-primary"
                  : "divide-gray-500"
              }`}
            >
              <p className="text-2xl font-semibold min-w-8">
                {fixture.homeScore}
              </p>
              <p className="text-2xl text-wrap font-semibold pl-3">
                {fixture.homeTeam}
              </p>
            </div>
            <div
              className={`flex divide-x-2 ${
                fixture.awayTeam === mainTeam
                  ? "divide-primary text-primary"
                  : "divide-gray-500"
              }`}
            >
              <p className="text-2xl font-semibold min-w-8">
                {fixture.awayScore}
              </p>
              <p className="text-2xl text-wrap font-semibold pl-3">
                {fixture.awayTeam}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between">
          {/* fixture date info */}
          <div className="flex flex-col items-center border-r p-3 w-1/3 relative md:w-1/4">
            <p className="text-center mb-1 text-lg md:text-xl">
              {fixture.date}
            </p>
            <p>{fixture.time}</p>
            <p className="text-center text-6xl">{fixture.hoa[0]}</p>
          </div>
          {/* fixture match info */}
          <div
            className={`flex justify-between items-center p-3 w-full relative overflow-hidden`}
          >
            <div className=" h-28 overflow-hidden relative flex flex-col items-start justify-center">
              <div className="flex">
                <IconContext.Provider value={{ size: "1.5rem" }}>
                  <div className="pr-1">
                    <GiSoccerField />
                  </div>
                </IconContext.Provider>
                <p>{fixture.venue}</p>
              </div>
              <p className="text-2xl md:text-5xl font-bold">
                {fixture.hoa === "Home" ? fixture.awayTeam : fixture.homeTeam}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
