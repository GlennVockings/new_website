import { dummyPlayers } from "../dummyData";
import { PlayerTest } from "../components/PlayerTest";
import { StatsRow } from "../components/StatsRow";
import { playerTableHelper } from "../helpers/helper-funcs";

export const Home = () => {
  const stats = playerTableHelper(dummyPlayers);

  return (
    <div className="container mx-auto md:overflow-x-scroll">
      <table className="player-table">
        <thead>
          <tr className="header">
            <th>Players</th>
            {dummyPlayers.map((player) => {
              return (
                <PlayerTest
                  name={player.name}
                  position={player.position}
                  number={player.number}
                />
              );
            })}
          </tr>
        </thead>
        <tbody>
          {stats.map((stat) => {
            return <StatsRow stats={stat} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
