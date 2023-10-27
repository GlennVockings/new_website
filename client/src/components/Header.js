import { Navigation } from "./Navigation";
import { mainTeam } from "../helpers/constants";

export const Header = () => {
  return (
    <div className="bg-gradient-to-r pt-28 w-full overflow-hidden from-secondary to-primary fixed z-30 top-0">
      <img
        className="absolute h-60 top-0 -left-4 opacity-70"
        src={`../assets/images/${mainTeam
          .split(" ")
          .join("-")
          .toLowerCase()}.png`}
        alt="Oxted FC Logo"
      />
      <a
        className="mid-sussex"
        href="https://fulltime.thefa.com/index.html?selectedSeason=179247076&selectedFixtureGroupAgeGroup=0&selectedDivision=116511351&selectedCompetition=0"
        target="_blank"
        rel="noreferrer"
      >
        <div className="mid-sussex-container">
          <p className="text">Mid Sussex League</p>
          <div className="image">
            <img
              src="../assets/images/mid-sussex-league.png"
              alt="Mid Sussex League logo"
            />
          </div>
        </div>
      </a>
      <Navigation />
    </div>
  );
};
