import { dummyPlayers } from "../dummyData";
import { PlayerTest } from "../components/PlayerTest";

export const Home = () => {
  return (
    <div className="container mx-auto md:overflow-x-scroll">
      <table className="player-table">
        <thead>
          <tr className="header">
            <th>Name</th>
            <th>Appearances</th>
            <th>Goals</th>
            <th>Penalties</th>
            <th>Assists</th>
            <th>Yellow Cards</th>
            <th>Red Cards</th>
            <th>Started</th>
            <th>Player of Match</th>
            <th>Clean Sheets</th>
          </tr>
        </thead>
        <tbody>
          {dummyPlayers.map((player) => {
            return (
              <PlayerTest
                name={player.name}
                position={player.position}
                number={player.number}
                stats={player.stats}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
