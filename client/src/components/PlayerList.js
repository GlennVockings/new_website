import placeholderFull from "../images/player-placeholder-full.png";
import { useState } from 'react';

import { players } from "../dummyData.js";
import { Player } from "./Player";

export const PlayerList = () => {
    // States
    const [ statsView, setStatsView ] = useState(false);
    
    
  return (
    <>
      <div className="container mx-auto">
        <label className="switch btn-view-mode-switch">
            <input type="checkbox" name="view_mode" id="color_mode" value="1" />
            <label htmlFor="view_mode" data-on="Stats" data-off="Player" className="btn-view-mode-switch-inner"></label>
        </label>
      </div>
        <div className="flex flex-wrap justify-center items-end space-x-4 space-y-24">
          { 
            players.map( player => {
              return <Player name={ player.name } position={ player.position } number={ player.number } statsView={ statsView } />
            })
          }
        </div>
    </>
  );
};
