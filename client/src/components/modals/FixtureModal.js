import { mainTeam, teams } from "../../helpers/constants";
import { useRef } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_WEEKS } from "../../queries/weekQueries";
import { Loading } from "../ui/Loading";
import { BsSendFill } from "react-icons/bs";
import { ADD_FIXTURE } from "../../mutations/fixtureMutations";
import { GET_FIXTURES } from "../../queries/fixtureQueries";

export const FixtureModal = ({ handleClose, show }) => {
  const homeTeamRef = useRef();
  const awayTeamRef = useRef();
  const homeScoreRef = useRef();
  const awayScoreRef = useRef();
  const venueRef = useRef();
  const dateRef = useRef();
  const timeRef = useRef();
  const weekRef = useRef();

  const { loading, data } = useQuery(GET_WEEKS);

  const [addFixture] = useMutation(ADD_FIXTURE, {
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
      homeTeamRef.current.value === "" ||
      awayTeamRef.current.value === "" ||
      timeRef.current.value === "" ||
      dateRef.current.value === "" ||
      venueRef.current.value === "" ||
      weekRef.current.value === ""
    ) {
      return alert("Oops you missed a field");
    }

    const hoa = homeScoreRef.current.value === mainTeam ? "Home" : "Away";

    addFixture({
      variables: {
        homeTeam: homeTeamRef.current.value,
        awayTeam: awayTeamRef.current.value,
        time: timeRef.current.value,
        date: dateRef.current.value,
        venue: venueRef.current.value,
        homeScore: Number(homeScoreRef.current.value),
        awayScore: Number(awayScoreRef.current.value),
        weekId: weekRef.current.value,
        hoa,
      },
    });
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
          <p className="text-lg">Add fixture</p>
          <button onClick={handleClose}>X</button>
        </div>
        <form onSubmit={onSubmit}>
          <div className="flex">
            <div className="flex flex-col p-6 items-center">
              <select
                ref={homeTeamRef}
                className="py-1 mb-2 mx-3 border rounded-md border-black"
              >
                <option value="">Home team</option>
                {teams.map((option, index) => {
                  return (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  );
                })}
              </select>
              <input
                ref={homeScoreRef}
                type="number"
                placeholder="Home Score"
                className="w-full mx-3 border rounded-md p-1 border-black"
              />
            </div>
            <div className="flex flex-col p-6 items-center">
              <select
                ref={awayTeamRef}
                className="py-1 mb-2 mx-3 border rounded-md border-black"
              >
                <option value="">Away team</option>
                {teams.map((option, index) => {
                  return (
                    <option
                      key={index}
                      className="text-2xl"
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  );
                })}
              </select>
              <input
                ref={awayScoreRef}
                type="number"
                placeholder="Away Score"
                className="w-full mx-3 border rounded-md p-1 border-black"
              />
            </div>
          </div>
          <div className="flex flex-col items-center pt-3">
            <p className="underline font-bold pb-2">Info</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Venue"
                className="border rounded-md p-1 border-black"
                ref={venueRef}
              />
              <input
                type="text"
                placeholder="Date"
                className="mx-3 border rounded-md p-1 border-black"
                ref={dateRef}
              />
              <input
                type="text"
                placeholder="Time"
                className="border rounded-md p-1 border-black"
                ref={timeRef}
              />
            </div>
          </div>
          <div className="flex py-4">
            <div className="grow flex flex-col items-center">
              <p className="underline font-bold pb-2">Week</p>
              <select ref={weekRef}>
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
    </div>
  );
};
