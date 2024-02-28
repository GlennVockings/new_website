import placeholder from "../../images/player-placeholder-full.png";
import { mainTeam } from "../../helpers/constants";

export const PlayerCard = ({ name, stat, goals, appearances, cleanSheets }) => {
  const firstName = name.split(" ")[0];
  const lastName = name.split(" ")[1];

  return (
    <div className="flex border-2 rounded-2xl bg-secondary text-white pr-4 relative">
      <div className="rounded-2xl z-40 w-full bg-tertiary flex flex-col items-start justify-between py-8 px-2">
        <p className="text-xl font-bold uppercase">Top Scorer</p>
        <div className="flex flex-col items-center justify-center">
          <p className="text-xl">Goals</p>
          <p className="text-2xl">5</p>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-xl uppercase">{firstName}</p>
          <p className="text-4xl font-bold uppercase whitespace-nowrap">{lastName}</p>
        </div>
      </div>
      <img
        className="w-8 absolute top-4 right-4"
        src={`../assets/images/${mainTeam
          .split(" ")
          .join("-")
          .toLowerCase()}.png`}
        alt={`${mainTeam} logo`}
      />
      <img className="w-1/2" src={placeholder} alt="placeholder" />
    </div>
  );
};