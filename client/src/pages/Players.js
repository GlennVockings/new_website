import { useState } from "react";

import { players } from "../dummyData";
import { Player } from "../components/Player";

export const Players = () => {
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
        {players.map((player) => {
          return (
            <Player
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
