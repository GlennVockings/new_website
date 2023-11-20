import { useQuery } from "@apollo/client";
import { GET_WEEKS } from "../../queries/weekQueries";
import { GrAdd, GrSubtract } from "react-icons/gr";
import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { Loading } from "../Loading";

export const AdminWeeks = ({ handleOpen }) => {
  const { loading, data } = useQuery(GET_WEEKS);
  const [isWeekOpen, setIsWeekOpen] = useState(false);

  const handleIsWeek = () => {
    setIsWeekOpen(isWeekOpen ? false : true);
  };

  if (loading) return <Loading />;

  return (
    <>
      <div
        className="flex items-center px-2 py-4 hover:bg-gray-300"
        onClick={handleIsWeek}
      >
        {!isWeekOpen && <GrAdd />}
        {isWeekOpen && <GrSubtract />}
        <span className="ml-4 text-3xl">Weeks</span>
      </div>
      <ul
        className={`divide-y transition-all duration-300 ${
          isWeekOpen ? "h-96 overflow-x-scroll" : "h-0 overflow-hidden"
        }`}
      >
        <li>
          <div className="flex">
            <button
              className="btn btn-primary mx-2 my-4 w-40 shadow-md shadow-primary"
              onClick={handleOpen}
            >
              Add week <GoArrowRight />
            </button>
          </div>
        </li>
        {data.weeks.map((week, index) => {
          return (
            <li key={index} className="py-4 hover:bg-gray-400">
              <a
                href={`/admin/week/${week.id}`}
                className="grid grid-cols-3 gap-x-2 place-items-center"
              >
                <div>
                  <p>Week</p>
                  <p>{week.week}</p>
                </div>
                <div>
                  <p>W/C</p>
                  <p>{week.wc}</p>
                </div>
                <div>
                  <p>Status</p>
                  <p>{week.status}</p>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};
