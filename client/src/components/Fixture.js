import { IoFootball } from "react-icons/io5";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { useState, useEffect } from "react";
import { Goal } from "./Goal";
import { convertDate, getStatus } from "../helpers/helper-funcs";

export const Fixture = ({ fixture }) => {
  // states
  const [showDetails, setShowDetails] = useState(false);
  const [matchStatus, setMatchStatus] = useState("Ready");

  // functions
  const handleClick = (event) => {
    const button = event.target;
    button.classList.toggle("open");
    setShowDetails(showDetails ? false : true);
  };

  // effects
  useEffect(() => {
    const status = getStatus(fixture);
    setMatchStatus(status);
  }, [fixture]);

  return (
    <div className="container p-2 min-h-36 hover:shadow-xl font-cursive">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-center border-r p-3 w-1/4 text-xl">
          <p className="text-center mb-1">{convertDate(fixture.date)}</p>
          <IoFootball />
        </div>
        <div
          className={`flex items-center p-3 w-full relative overflow-hidden`}
        >
          <img
            className="absolute opacity-20 -left-10 -bottom-20 h-64"
            src={`/assets/images/${fixture.home
              .split(" ")
              .join("-")
              .toLowerCase()}.png`}
            alt={`${fixture.home.toLowerCase()} Logo`}
          />
          <img
            className="absolute opacity-20 -right-10 -bottom-20 h-64"
            src={`/assets/images/${fixture.away
              .split(" ")
              .join("-")
              .toLowerCase()}.png`}
            alt={`${fixture.away.toLowerCase()} Logo`}
          />
          <div className="text-4xl font-bold h-48 w-1/2 overflow-hidden relative flex justify-center items-center">
            {fixture.home}
          </div>
          {fixture.result !== null ? (
            <div className="flex items-center text-3xl px-3">
              <span className="text-8xl pr-2 font-bold">
                {fixture.result.home}
              </span>
              -
              <span className="text-8xl pl-2 font-bold">
                {fixture.result.away}
              </span>
            </div>
          ) : (
            <p className="px-3">V</p>
          )}
          <div className="text-4xl font-bold h-48 w-1/2 overflow-hidden relative flex justify-center items-center">
            {fixture.away}
          </div>
        </div>
        <div className="border-l p-3 w-1/4 ">
          {fixture.highlights && (
            <button
              className={`btn btn-primary`}
              onClick={(e) => handleClick(e)}
            >
              Details
              <HiOutlineChevronLeft />
            </button>
          )}
        </div>
      </div>
      {fixture.highlights && (
        <div className={`goals ${showDetails ? "max-h-96" : ""}`}>
          <div className="border-t py-2 mt-1 divide-x flex">
            <div className="w-1/2 ">
              <ul className="flex flex-col items-end pr-4">
                {fixture.highlights.map((highlight) => {
                  if (highlight.team !== fixture.home) return "";
                  return <Goal name={highlight.name} time={highlight.time} />;
                })}
              </ul>
            </div>
            <div className="w-1/2">
              <ul className="pl-4">
                {fixture.highlights.map((highlight) => {
                  if (highlight.team !== fixture.away) return "";
                  return <Goal name={highlight.name} time={highlight.time} />;
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
