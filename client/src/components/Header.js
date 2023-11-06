import { Navigation } from "./Navigation";
import { MobileNavigation } from "./MobileNavigation";
import { mainTeam } from "../helpers/constants";
import { useState } from "react";

export const Header = ({ isScrolled }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <div
        className={`bg-gradient-to-r ${
          isScrolled ? "pt-10 md:pt-12" : "pt-10 md:pt-28"
        } w-full overflow-hidden from-secondary to-primary fixed z-30 top-0 transition-all`}
      >
        <a href="/">
          <img
            className={`absolute ${
              isScrolled
                ? "h-48 md:h-44 -left-4 md:-left-0"
                : "h-48 md:h-60 -left-4"
            } top-0 opacity-70 transition-all`}
            src={`../assets/images/${mainTeam
              .split(" ")
              .join("-")
              .toLowerCase()}.png`}
            alt="Oxted FC Logo"
          />
        </a>
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
        <Navigation
          toggleMobileMenu={setShowMobileMenu}
          showMobileMenu={showMobileMenu}
        />
      </div>
      <MobileNavigation
        toggleMobileMenu={setShowMobileMenu}
        showMobileMenu={showMobileMenu}
      />
    </>
  );
};
