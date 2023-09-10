import { useQuery } from "@apollo/client";
import { GET_FIXTURES } from "../queries/fixtureQueries";
import { GrAdd, GrSubtract } from "react-icons/gr";
import { useState } from "react";
import { Loading } from "./Loading";
import { GoArrowRight } from "react-icons/go";

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
              <a
                href={`/admin/fixture/${fixture.id}`}
                className="grid grid-cols-5 gap-x-2 place-items-center"
              >
                <div className="">
                  <p className="text-center text-lg">Home:</p>
                  <p className="text-center text-2xl">{`${fixture.homeTeam}: ${fixture.homeScore}`}</p>
                </div>
                <div className="">
                  <p className="text-center text-lg">Away:</p>
                  <p className="text-center text-2xl">{`${fixture.awayTeam}: ${fixture.awayScore}`}</p>
                </div>
                <div className="text-xl">
                  <p>{`Date: ${fixture.date}`}</p>
                  <p>{`Time: ${fixture.time}`}</p>
                  <p>{`Venue: ${fixture.venue}`}</p>
                </div>
                <div className="">
                  <p className="text-center text-lg">Week:</p>
                  <p className="text-center text-2xl">{fixture.week.week}</p>
                </div>
                <div>
                  <p className="text-center">Status:</p>
                  <p className="text-2xl">{fixture.status}</p>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};
