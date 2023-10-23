import { GiSoccerField } from "react-icons/gi";
import { BiDetail } from "react-icons/bi";
import { IconContext } from "react-icons";

export const Fixture = ({ fixture }) => {
  return (
    <div className="container p-2 min-h-28 hover:shadow-xl font-cursive">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-center border-r p-3 w-1/4 relative">
          <p className="text-center mb-1 text-xl">{fixture.date}</p>
          <p>{fixture.time}</p>
          <p className="text-center text-6xl">{fixture.hoa[0]}</p>
          {fixture.status === "Completed" ? (
            <div className="bg-tertiary absolute -rotate-90 -left-16 text-center text-white top-16 w-36">
              <p>{fixture.status}</p>
            </div>
          ) : (
            ""
          )}
        </div>
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
            <p className="text-5xl font-bold">
              {fixture.hoa === "Home" ? fixture.awayTeam : fixture.homeTeam}
            </p>
          </div>
          {fixture.status !== "Upcoming" && (
            <div className="flex items-center">
              <p className="text-5xl">{fixture.homeScore}</p>
              <p className="text-2xl px-2">V</p>
              <p className="text-5xl pr-2">{fixture.awayScore}</p>
            </div>
          )}
        </div>
        {fixture.highlights && (
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
