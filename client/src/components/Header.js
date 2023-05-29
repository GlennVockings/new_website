import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <div className="bg-gradient-to-r relative pt-28 overflow-hidden from-secondary to-primary">
      <img
        className="absolute h-60 top-0 -left-4 opacity-70"
        src="/assets/images/oxted-fc.png"
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
              src="/assets/images/mid-sussex-league.png"
              alt="Mid Sussex League logo"
            />
          </div>
        </div>
      </a>
      <Navigation />
    </div>
  );
};
