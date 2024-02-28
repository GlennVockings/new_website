import placeholder from "../../images/player-placeholder-full.png";
import { mainTeam } from "../../helpers/constants";
import { splitTextWithCapital } from "../../helpers/helper-funcs";

export const PlayerCard = ({
  name,
  stat,
  goals,
  appearances,
  cleanSheets,
  statName,
  assists,
}) => {
  const firstName = name.split(" ")[0];
  const lastName = name.split(" ")[1];

  const statSelector = (stat) => {
    switch (stat) {
      case "goals":
        return goals;
      case "appearances":
        return appearances;
      case "cleanSheets":
        return cleanSheets;
      case "assists":
        return assists;
      default:
        return null;
    }
  };

  return (
    <div className="flex border-2 rounded-2xl bg-secondary text-white relative">
      <div className="rounded-2xl w-1/2 z-40 bg-tertiary flex flex-col items-start justify-between py-6 pl-4">
        <p className="text-xl font-bold uppercase tracking-wider whitespace-nowrap">
          {statName}
        </p>
        <div className="flex flex-col items-center justify-center">
          <p className="text-xl capitalize">{splitTextWithCapital(stat)}</p>
          <p className="text-2xl">{statSelector(stat)}</p>
        </div>
        <div className="flex flex-col items-start">
          <p className="text-lg uppercase">{firstName}</p>
          <p className="text-4xl font-bold uppercase whitespace-nowrap tracking-wide">
            {lastName}
          </p>
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
      <img className="w-1/2 px-2" src={placeholder} alt="placeholder" />
    </div>
  );
};
