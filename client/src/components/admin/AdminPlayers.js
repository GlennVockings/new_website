import { useQuery } from "@apollo/client";
import { GET_PLAYERS } from "../../queries/playerQueries";
import { GrAdd, GrSubtract } from "react-icons/gr";
import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { Loading } from "../Loading";
import { useNavigate } from "react-router-dom";

export const AdminPlayers = ({ handleOpen }) => {
  const { loading, data } = useQuery(GET_PLAYERS);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const navigate = useNavigate();

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
      <div
        className={`divide-y transition-all duration-300 ${
          isPlayerOpen ? "h-96 overflow-x-scroll" : "h-0 overflow-hidden"
        }`}
      >
        <div>
          <div className="flex">
            <button
              className="btn btn-primary mx-2 my-4 w-40 shadow-md shadow-primary"
              onClick={handleOpen}
            >
              Add player <GoArrowRight />
            </button>
          </div>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Number</th>
                <th>Name</th>
                <th>Position</th>
                <th>App.</th>
                <th>Goals</th>
                <th>Penalties</th>
                <th>Assists</th>
                <th>Yellow</th>
                <th>Red</th>
                <th>Started</th>
                <th>Man of match</th>
                <th>Clean Sheets</th>
              </tr>
            </thead>
            <tbody>
              {data.players.map((player, index) => {
                return (
                  <tr
                    key={index}
                    className="py-4 hover:bg-gray-400"
                    onClick={() => navigate(`/admin/player/${player.id}`)}
                  >
                    <td>{player.number}</td>
                    <td>{player.name}</td>
                    <td>{player.position}</td>
                    <td>{player.appearances}</td>
                    <td>{player.goals}</td>
                    <td>{player.penalties}</td>
                    <td>{player.assists}</td>
                    <td>{player.yellowCards}</td>
                    <td>{player.redCards}</td>
                    <td>{player.started}</td>
                    <td>{player.mom}</td>
                    <td>{player.cleanSheets}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
