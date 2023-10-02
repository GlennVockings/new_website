import { useEffect, useState } from "react";
import { Dropdown } from "../Dropdown";
import { mainTeam, teams } from "../../helpers/constants";
import { useQuery, useMutation } from "@apollo/client";
import { GET_WEEKS } from "../../queries/weekQueries";
import { BsSendFill } from "react-icons/bs";
import { Loading } from "../Loading";
import { Link, useParams, useNavigate } from "react-router-dom";
import { GET_FIXTURE } from "../../queries/fixtureQueries";
import { UPDATE_FIXTURE } from "../../mutations/fixtureMutations";

export const EditFixture = () => {
  const { id } = useParams();
  const [homeTeam, setHomeTeam] = useState("");
  const [awayTeam, setAwayTeam] = useState("");
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [venue, setVenue] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [newWeek, setNewWeek] = useState("");
  const [hoa, setHoa] = useState("Home");
  const navigate = useNavigate();

  const { loading: fixtureLoading, data: fixtureData } = useQuery(GET_FIXTURE, {
    variables: { id },
  });

  const { loading, data } = useQuery(GET_WEEKS);

  const [updateFixture] = useMutation(UPDATE_FIXTURE, {
    variables: {
      id,
      homeTeam,
      awayTeam,
      time,
      date,
      venue,
      homeScore,
      awayScore,
      weekId: newWeek,
      hoa,
    },
    refetchQueries: [{ query: GET_FIXTURE, variables: { id } }],
    onCompleted: () => {
      navigate("/admin");
    },
  });

  useEffect(() => {
    if (!fixtureLoading && fixtureData) {
      setHomeTeam(fixtureData.fixture.homeTeam);
      setAwayTeam(fixtureData.fixture.awayTeam);
      setHomeScore(fixtureData.fixture.homeScore);
      setAwayScore(fixtureData.fixture.awayScore);
      setVenue(fixtureData.fixture.venue);
      setDate(fixtureData.fixture.date);
      setTime(fixtureData.fixture.time);
      setNewWeek(fixtureData.fixture.week.id);
    }
  }, [fixtureLoading, fixtureData]);

  useEffect(() => {
    if (awayTeam === mainTeam) {
      setHoa("Away");
    } else if (homeTeam === mainTeam) {
      setHoa("Home");
    }
  }, [awayTeam, homeTeam]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      homeTeam === "" ||
      awayTeam === "" ||
      venue === "" ||
      time === "" ||
      date === "" ||
      newWeek === ""
    ) {
      return alert("Oops you missed a field");
    }

    updateFixture(
      id,
      homeTeam,
      awayTeam,
      time,
      date,
      venue,
      homeScore,
      awayScore,
      newWeek,
      hoa
    );
  };

  if (loading || fixtureLoading) return <Loading />;

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-3xl">Edit Fixture</h1>
        <Link to="/admin" className="btn btn-secondary">
          Back
        </Link>
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <div className="flex justify-between">
            <div className="flex flex-col p-6 items-center">
              <p className="text-3xl underline font-bold">Home</p>
              <Dropdown
                options={teams}
                name="teams"
                cssClass="py-3 text-2xl"
                activeOption={fixtureData.fixture.homeTeam}
                callback={(e) => setHomeTeam(e.target.value)}
              />
              <input
                type="number"
                placeholder="Home Score"
                className="w-full text-2xl"
                value={homeScore}
                onChange={(e) => setHomeScore(Number(e.target.value))}
              />
            </div>
            <div className="flex flex-col p-6 items-center">
              <p className="text-3xl underline font-bold">Away</p>
              <Dropdown
                options={teams}
                name="teams"
                cssClass="py-3 text-2xl"
                activeOption={fixtureData.fixture.awayTeam}
                callback={(e) => setAwayTeam(e.target.value)}
              />
              <input
                type="number"
                placeholder="Away Score"
                className="w-full text-2xl"
                value={awayScore}
                onChange={(e) => setAwayScore(Number(e.target.value))}
              />
            </div>
          </div>
          <div className="flex flex-col items-center pt-3">
            <p className="text-3xl underline font-bold pb-2">Info</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Venue"
                className="text-xl"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
              />
              <input
                type="text"
                placeholder="Date"
                className="text-xl mx-3"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <input
                type="text"
                placeholder="Time"
                className="text-xl"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>
          <div className="flex py-4">
            <div className="grow flex flex-col items-center">
              <p className="text-2xl underline font-bold pb-2">Week</p>
              <select
                className="text-xl"
                onChange={(e) => setNewWeek(e.target.value)}
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
