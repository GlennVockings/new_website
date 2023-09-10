import { useState } from "react";
import { Dropdown } from "./Dropdown";
import { mainTeam, status, teams } from "../helpers/constants";
import { useQuery, useMutation } from "@apollo/client";
import { GET_WEEKS } from "../queries/weekQueries";
import { BsSendFill } from "react-icons/bs";
import { Loading } from "./Loading";

export const EditFixture = () => {
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [venue, setVenue] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [week, setWeek] = useState("");
  const [fixtureStatus, setFixtureStatus] = useState("new");
  const [hoa, setHoa] = useState("Home");

  const { loading, data } = useQuery(GET_WEEKS);

  if (loading) return <Loading />;

  return (
    <>
      <div>
        <h1>Edit Fixture</h1>
      </div>
      <div>
        <form>
          <div className="flex">
            <div className="flex flex-col p-6 items-center">
              <p className="text-2xl underline font-bold">Home</p>
              <Dropdown
                options={teams}
                name="teams"
                cssClass="py-3 text-xl"
                callback={(e) => setHomeTeam(e.target.value)}
              />
              <input
                type="number"
                placeholder="Home Score"
                className="w-full text-xl"
                onChange={(e) => setHomeScore(Number(e.target.value))}
              />
            </div>
            <div className="flex flex-col p-6 items-center">
              <p className="text-2xl underline font-bold">Away</p>
              <Dropdown
                options={teams}
                name="teams"
                cssClass="py-3 text-xl"
                callback={(e) => setAwayTeam(e.target.value)}
              />
              <input
                type="number"
                placeholder="Away Score"
                className="w-full text-xl"
                onChange={(e) => setAwayScore(Number(e.target.value))}
              />
            </div>
          </div>
          <div className="flex flex-col items-center pt-3">
            <p className="text-2xl underline font-bold pb-2">Info</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Venue"
                className="text-xl"
                onChange={(e) => setVenue(e.target.value)}
              />
              <input
                type="text"
                placeholder="Date"
                className="text-xl mx-3"
                onChange={(e) => setDate(e.target.value)}
              />
              <input
                type="text"
                placeholder="Time"
                className="text-xl"
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>
          <div className="flex py-4">
            <div className="grow flex flex-col items-center">
              <p className="text-2xl underline font-bold pb-2">Week</p>
              <select
                className="text-xl"
                onChange={(e) => setWeek(e.target.value)}
              >
                <option value="">Please select one</option>
                {data.weeks.map((week, index) => {
                  return (
                    <option key={index} value={week.id}>
                      {week.week} - {week.wc}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="grow flex flex-col items-center">
              <p className="text-2xl underline font-bold pb-2">Status</p>
              <Dropdown
                options={status}
                name="status"
                callback={(e) => setFixtureStatus(e.target.value)}
                cssClass="text-xl"
              />
            </div>
          </div>
          <div className="flex">
            <button className="btn btn-primary">
              Submit <BsSendFill />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
