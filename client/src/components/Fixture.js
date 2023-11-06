import { GiSoccerField } from "react-icons/gi";
import { IconContext } from "react-icons";
import { mainTeam } from "../helpers/constants";

export const Fixture = ({ fixture }) => {
  return (
    <div className="container lg:hover:shadow-xl font-cursive relative">
      {fixture.status !== "Upcoming" ? (
        <div className="flex flex-col justify-between min-h-40">
          <div className="flex items-center justify-center bg-tertiary absolute -rotate-90 -left-12 md:-left-14 text-white bottom-13.25 md:bottom-16 w-36 h-9 md:w-40">
            <p>{fixture.status}</p>
          </div>
          <div className="flex p-3 ml-12 mt-3 gap-3 relative text-sm md:text-xl md:w-1/4">
            <p className="text-center mb-1">{fixture.date}</p>
            <p>{fixture.time}</p>
            <p>{fixture.hoa}</p>
          </div>
          <div className="overflow-hidden relative px-3 ml-12 mb-5 flex flex-col gap-3 items-start justify-center">
            <div
              className={`flex items-center divide-x-2 ${
                fixture.homeTeam === mainTeam
                  ? "divide-primary text-primary"
                  : "divide-gray-500"
              }`}
            >
              <p className="text-2xl md:text-3xl font-semibold min-w-8">
                {fixture.homeScore}
              </p>
              <p className="text-2xl max-w-80 md:text-3xl truncate font-semibold pl-3 md:max-w-full">
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
              <p className="text-2xl md:text-3xl font-semibold min-w-8">
                {fixture.awayScore}
              </p>
              <p className="text-2xl max-w-80 md:text-3xl truncate font-semibold pl-3 md:max-w-full">
                {fixture.awayTeam}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-end justify-start">
          {/* fixture date info */}
          <div className="flex flex-col items-center border-r py-6 w-1/3 relative md:w-1/4">
            <p className="text-center mb-1 text-lg md:text-xl">
              {fixture.date}
            </p>
            <p>{fixture.time}</p>
            <p className="text-center text-6xl">{fixture.hoa[0]}</p>
          </div>
          {/* fixture match info */}
          <div
            className={`flex justify-between items-center px-3 py-6 relative overflow-hidden`}
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
