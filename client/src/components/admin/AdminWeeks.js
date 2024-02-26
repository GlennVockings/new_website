import { useQuery } from "@apollo/client";
import { GET_WEEKS } from "../../queries/weekQueries";
import { GrAdd, GrSubtract } from "react-icons/gr";
import { useMemo, useState } from "react";
import { Loading } from "../ui/Loading";
import { Table } from "../ui/Table";

export const AdminWeeks = () => {
  const { loading, data } = useQuery(GET_WEEKS);
  const [isWeekOpen, setIsWeekOpen] = useState(false);

  const handleIsWeek = () => {
    setIsWeekOpen(isWeekOpen ? false : true);
  };

  const columns = useMemo(
    () => [
      {
        header: "Week",
        accessorKey: "week",
      },
      {
        header: "WC",
        accessorKey: "wc",
      },
      {
        header: "Status",
        accessorKey: "status",
      },
    ],
    []
  );

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
      <div
        className={`divide-y transition-all duration-300 ${
          isWeekOpen ? "h-128 overflow-y-scroll" : "h-0 overflow-hidden"
        }`}
      >
        {/* <ul>
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
        </ul> */}
        <Table data={data.weeks} columns={columns} />
      </div>
    </>
  );
};
