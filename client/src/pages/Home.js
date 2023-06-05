import { PlayerTest } from "../components/PlayerTest";
import { useState } from "react";
import { dummyPlayers } from "../dummyData.js";

export const Home = () => {
  // States
  const [statsView, setStatsView] = useState(false);
    
  return (
    <>
      <div className="flex justify-center py-6">
        <div className="tabs">
          <button
            className={`tab ${statsView ? "" : "active"}`}
            onClick={() => setStatsView((prev) => !prev)}
          >
            Players
          </button>
          <button
            className={`tab ${statsView ? "active" : ""}`}
            onClick={() => setStatsView((prev) => !prev)}
          >
            Stats
          </button>
        </div>
      </div>
      <div className="player-list">
        {dummyPlayers.map((player) => {
          return (
            <PlayerTest
              name={player.name}
              position={player.position}
              number={player.number}
              statsView={statsView}
            />
          );
        })}
      </div>
    </>
  );
};
