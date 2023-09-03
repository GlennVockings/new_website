import { useQuery } from "@apollo/client";
import { GET_PLAYERS } from "../queries/playerQueries";
import { GrAdd, GrSubtract } from "react-icons/gr";
import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { Loading } from "./Loading";

export const AdminPlayers = () => {
  const { loading, data } = useQuery(GET_PLAYERS);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  const handleIsPlayer = () => {
    setIsPlayerOpen(isPlayerOpen ? false : true);
  };

  if (loading) return <Loading />;

  return (
    <>
      <div
        className="flex items-center px-2 py-4 hover:bg-gray-300"
        onClick={handleIsPlayer}
      >
        {!isPlayerOpen && <GrAdd />}
        {isPlayerOpen && <GrSubtract />}
        <span className="ml-4 text-3xl">Players</span>
      </div>
      <ul
        className={`divide-y transition-all duration-300 ${
          isPlayerOpen ? "h-96 overflow-x-scroll" : "h-0 overflow-hidden"
        }`}
      >
        <li>
          <div className="flex">
            <button className="btn btn-primary mx-2 my-4 w-40 shadow-md shadow-primary">
              Add player <GoArrowRight />
            </button>
          </div>
        </li>
        {data.players.map((player) => {
          return (
            <li className="py-4 hover:bg-gray-400">
              <a
                href="#"
                className="grid grid-cols-3 gap-x-2 place-items-center"
              >
                <div className="text-xl">
                  <p>{`Name: ${player.name}`}</p>
                  <p>{`Number: ${player.number}`}</p>
                  <p>{`Position: ${player.position}`}</p>
                </div>
                <div className="text-xl">
                  <p>{`Appearances: ${player.appearances}`}</p>
                  <p>{`Goals: ${player.goals}`}</p>
                  <p>{`Penalties: ${player.penalties}`}</p>
                  <p>{`Assists: ${player.assists}`}</p>
                </div>
                <div className="text-xl">
                  <p>{`Yellow cards: ${player.yellowCards}`}</p>
                  <p>{`Red cards: ${player.redCards}`}</p>
                  <p>{`Started: ${player.started}`}</p>
                  <p>{`Man of match: ${player.mom}`}</p>
                  <p>{`Clean sheets: ${player.cleanSheets}`}</p>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};
