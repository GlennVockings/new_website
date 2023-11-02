export const MobileNavigation = ({ showMobileMenu, toggleMobileMenu }) => {
  return (
    <div
      className={`${
        showMobileMenu ? "bg-black/80 w-full" : "bg-black/0 w-0"
      } h-full absolute top-0 right-0 z-50 overflow-hidden transition-colors`}
      onClick={() => toggleMobileMenu(false)}
    >
      <div
        className={`ml-auto h-full ${
          showMobileMenu ? "w-2/3" : "w-0"
        } bg-white transition-width duration-300`}
      >
        <div className="h-full w-4 bg-primary absolute"></div>
        <nav className="text-2xl pl-8 pt-8">
          <a
            className="flex mb-4"
            href="https://fulltime.thefa.com/index.html?selectedSeason=179247076&selectedFixtureGroupAgeGroup=0&selectedDivision=116511351&selectedCompetition=0"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center rounded-full">
              <div className="mr-4 w-12">
                <img
                  src="../assets/images/mid-sussex-league.png"
                  alt="Mid Sussex League logo"
                />
              </div>
              <p className="text-base pr-3 font-bold">Mid Sussex League</p>
            </div>
          </a>
          <ul className="space-y-5 font-extrabold">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/fixtures">Fixtures</a>
            </li>
            <li>
              <a href="/team">Team</a>
            </li>
            <li>
              <a href="/table">Table</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
