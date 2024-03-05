import { Wrapper } from "../wrapper/Wrapper";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { GET_PLAYER } from "../../queries/playerQueries";
import { useState } from "react";
import { Loading } from "../ui/Loading";
import { BsSendFill } from "react-icons/bs";
import { UPDATE_PLAYER } from "../../mutations/playerMutations";

export const EditPlayer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [number, setNumber] = useState(0);
  const [position, setPosition] = useState("");
  const [appearances, setAppearances] = useState(0);
  const [goals, setGoals] = useState(0);
  const [penalties, setPenalties] = useState(0);
  const [assists, setAssists] = useState(0);
  const [yellowCards, setYellowcards] = useState(0);
  const [redCards, setRedCards] = useState(0);
  const [started, setStarted] = useState(0);
  const [mom, setMom] = useState(0);
  const [cleanSheets, setCleanSheets] = useState(0);

  const { loading, data } = useQuery(GET_PLAYER, {
    variables: { id },
    onCompleted: (data) => {
      setName(data.player.name);
      setNumber(data.player.number);
      setPosition(data.player.position);
      setPenalties(data.player.penalties);
      setAppearances(data.player.appearances);
      setGoals(data.player.goals);
      setAssists(data.player.assists);
      setYellowcards(data.player.yellowCards);
      setRedCards(data.player.redCards);
      setStarted(data.player.started);
      setMom(data.player.mom);
      setCleanSheets(data.player.cleanSheets);
    },
  });

  const [updatePlayer] = useMutation(UPDATE_PLAYER, {
    variables: {
      id,
      name,
      number,
      position,
      goals,
      appearances,
      assists,
      penalties,
      yellowCards,
      redCards,
      started,
      mom,
      cleanSheets,
    },
    refetchQueries: [{ query: GET_PLAYER, variables: { id } }],
    onCompleted: () => {
      navigate("/admin");
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (
      name === "" ||
      number === "" ||
      position === "" ||
      goals === "" ||
      appearances === "" ||
      assists === "" ||
      penalties === "" ||
      yellowCards === "" ||
      redCards === "" ||
      started === "" ||
      mom === "" ||
      cleanSheets === ""
    ) {
      return alert("Oops you missed a field");
    }

    updatePlayer(
      id,
      name,
      number,
      position,
      goals,
      appearances,
      assists,
      penalties,
      yellowCards,
      redCards,
      started,
      mom,
      cleanSheets
    );
  };

  if (loading) return <Loading />;

  return (
    <Wrapper>
      <div className="flex justify-between">
        <h1 className="text-3xl">Edit Player</h1>
        <Link to="/admin" className="btn btn-secondary">
          Back
        </Link>
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col p-6 items-center">
            <input
              type="text"
              placeholder="Name"
              className="w-full text-2xl"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Number"
              className="w-full text-2xl"
              value={number}
              onChange={(e) => setNumber(Number(e.target.value))}
            />
            <input
              type="text"
              placeholder="Position"
              className="w-full text-2xl"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
            <label>Goals</label>
            <input
              type="number"
              placeholder="Goals"
              className="w-full text-2xl"
              value={goals}
              onChange={(e) => setGoals(Number(e.target.value))}
            />
            <label>Appearances</label>
            <input
              type="number"
              placeholder="Appearances"
              className="w-full text-2xl"
              value={appearances}
              onChange={(e) => setAppearances(Number(e.target.value))}
            />
            <label>Penalties</label>
            <input
              type="number"
              placeholder="Penalties"
              className="w-full text-2xl"
              value={penalties}
              onChange={(e) => setPenalties(Number(e.target.value))}
            />
            <label>Assists</label>
            <input
              type="number"
              placeholder="Assists"
              className="w-full text-2xl"
              value={assists}
              onChange={(e) => setAssists(Number(e.target.value))}
            />
            <label>Yellow cards</label>
            <input
              type="number"
              placeholder="Yellow cards"
              className="w-full text-2xl"
              value={yellowCards}
              onChange={(e) => setYellowcards(Number(e.target.value))}
            />
            <label>Red cards</label>
            <input
              type="number"
              placeholder="Red Cards"
              className="w-full text-2xl"
              value={redCards}
              onChange={(e) => setRedCards(Number(e.target.value))}
            />
            <label>Started</label>
            <input
              type="number"
              placeholder="Started"
              className="w-full text-2xl"
              value={started}
              onChange={(e) => setStarted(Number(e.target.value))}
            />
            <label>Man of the match</label>
            <input
              type="number"
              placeholder="Man of the match"
              className="w-full text-2xl"
              value={mom}
              onChange={(e) => setMom(Number(e.target.value))}
            />
            <label>Clean Sheets</label>
            <input
              type="number"
              placeholder="Clean Sheets"
              className="w-full text-2xl"
              value={cleanSheets}
              onChange={(e) => setCleanSheets(Number(e.target.value))}
            />
          </div>
          <div className="flex">
            <button className="btn btn-primary">
              Submit <BsSendFill />
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};
