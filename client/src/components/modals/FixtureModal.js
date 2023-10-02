import { Dropdown } from "../Dropdown";
import { mainTeam, status, teams } from "../../helpers/constants";
import { useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_WEEKS } from "../../queries/weekQueries";
import { Loading } from "../Loading";
import { BsSendFill } from "react-icons/bs";
import { ADD_FIXTURE } from "../../mutations/fixtureMutations";
import { GET_FIXTURES } from "../../queries/fixtureQueries";

export const FixtureModal = ({ handleClose, show }) => {
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

  useEffect(() => {
    if (awayTeam === mainTeam) {
      setHoa("Away");
    } else if (homeTeam === mainTeam) {
      setHoa("Home");
    }
  }, [awayTeam, homeTeam]);

  const [addFixture] = useMutation(ADD_FIXTURE, {
    variables: {
      homeTeam,
      awayTeam,
      time,
      date,
      venue,
      homeScore,
      awayScore,
      weekId: week,
      status: fixtureStatus,
      hoa,
    },
    update(cache, { data: { addFixture } }) {
      const { fixtures } = cache.readQuery({ query: GET_FIXTURES });
      cache.writeQuery({
        query: GET_FIXTURES,
        data: { fixtures: [...fixtures, addFixture] },
      });
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      homeTeam === "" ||
      awayTeam === "" ||
      venue === "" ||
      time === "" ||
      date === "" ||
      week === "" ||
      fixtureStatus === ""
    ) {
      return alert("Oops you missed a field");
    }
    addFixture(
      homeTeam,
      awayTeam,
      time,
      date,
      venue,
      homeScore,
      awayScore,
      week,
      fixtureStatus,
      hoa
    );
    handleClose();
  };

  if (loading) return <Loading />;

  return (
    <div
      className={`bg-black/80 absolute w-full h-full top-0 left-0 m-auto ${
        show === "fixture" ? "block" : "hidden"
      }`}
    >
      <div className="z-20 rounded opacity-100 absolute p-8 bg-white -translate-x-2/4 left-1/2 top-40">
        <div className="flex justify-between">
          <p className="text-5xl">Add fixture</p>
          <button onClick={handleClose}>X</button>
        </div>
        <form onSubmit={onSubmit}>
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
    </div>
  );
};
