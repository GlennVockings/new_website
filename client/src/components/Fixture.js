import { IoFootball } from "react-icons/io5";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { BiDetail } from "react-icons/bi";
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
    <div className="container p-2 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-center border-r p-3 w-1/4">
          <p className="text-sm text-center mb-1">
            {convertDate(fixture.date)}
          </p>
          <IoFootball />
        </div>
        <div className="flex items-center p-3 w-full">
          <div className="h-14 min-w-14 flex justify-center">
            <img
              className=""
              src={`/assets/images/${fixture.home
                .split(" ")
                .join("-")
                .toLowerCase()}.png`}
              alt="Logo"
            />
          </div>

          <div className="w-1/2">
            <p>{fixture.home}</p>
          </div>
          <p className="px-3 ">V</p>
          <div className="w-1/2">
            <p>{fixture.away}</p>
          </div>
          <img
            className="h-14 w-14"
            src={`/assets/images/${fixture.away
              .split(" ")
              .join("-")
              .toLowerCase()}.png`}
            alt="Logo"
          />
        </div>
        <div className="border-l p-3 w-1/4 ">
          <button className={`btn btn-primary mb-2`}>
            Details
            <BiDetail />
          </button>
          {fixture.highlights && (
            <button
              className={`btn btn-secondary`}
              onClick={(e) => handleClick(e)}
            >
              Goals
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
