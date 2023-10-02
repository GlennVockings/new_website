import { useQuery } from "@apollo/client";
import { GET_FIXTURES } from "../../queries/fixtureQueries";
import { GrAdd, GrSubtract } from "react-icons/gr";
import { useState } from "react";
import { Loading } from "../Loading";
import { GoArrowRight } from "react-icons/go";
import { GiSoccerField } from "react-icons/gi";
import { IconContext } from "react-icons";

export const AdminFixtures = ({ handleOpen }) => {
  const { loading, data } = useQuery(GET_FIXTURES);
  const [isFixturesOpen, setIsFixturesOpen] = useState(false);

  const handleIsFixture = () => {
    setIsFixturesOpen(isFixturesOpen ? false : true);
  };

  if (loading) return <Loading />;

  return (
    <>
      <div
        className="flex items-center px-2 py-4 hover:bg-gray-300"
        onClick={handleIsFixture}
      >
        {!isFixturesOpen && <GrAdd />}
        {isFixturesOpen && <GrSubtract />}
        <span className="ml-4 text-3xl">Fixtures</span>
      </div>
      <ul
        className={`divide-y transition-all duration-300 ${
          isFixturesOpen ? "h-132 overflow-x-scroll" : "h-0 overflow-hidden"
        }`}
      >
        <li>
          <div className="flex">
            <button
              onClick={handleOpen}
              className="btn btn-primary mx-2 my-4 w-40 shadow-md shadow-primary"
            >
              Add fixture <GoArrowRight />
            </button>
            <button className="btn btn-primary mx-2 my-4 w-56 shadow-md shadow-primary">
              Delete all fixtures <GoArrowRight />
            </button>
          </div>
        </li>
        {data.fixtures.map((fixture, index) => {
          return (
            <li key={index} className="py-4 hover:bg-gray-400">
              <a href={`/admin/fixture/${fixture.id}`} className="flex gap-x-5">
                {/* Match info */}
                <div className="flex flex-col items-center border-r p-3 w-96 relative">
                  <p className="text-center mb-1 text-2xl">{fixture.date}</p>
                  <p className="text-center mb-1 text-2xl">{fixture.time}</p>
                  <div className="flex items-baseline">
                    <IconContext.Provider value={{ size: "2rem" }}>
                      <div className="pr-2">
                        <GiSoccerField />
                      </div>
                    </IconContext.Provider>
                    <p className="text-center text-2xl">{fixture.venue}</p>
                  </div>
                </div>
                {/* Teams and scores */}
                <div className="flex flex-col justify-center gap-y-5">
                  <div className="flex divide-x-2 divide-gray-500 ">
                    <p className="text-3xl font-semibold pr-2 w-80 truncate">
                      {fixture.homeTeam}
                    </p>
                    <p className="text-3xl font-semibold pl-2">
                      {fixture.homeScore}
                    </p>
                  </div>
                  <div className="flex divide-x-2 divide-gray-500 ">
                    <p className="text-3xl font-semibold pr-2 w-80 truncate">
                      {fixture.awayTeam}
                    </p>
                    <p className="text-3xl font-semibold pl-2">
                      {fixture.awayScore}
                    </p>
                  </div>
                </div>

                {/* Week */}
                <div className="flex flex-col justify-center gap-2">
                  <p className="text-center text-xl px-4">Week:</p>
                  <p className="text-center text-4xl">{fixture.week.week}</p>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};
