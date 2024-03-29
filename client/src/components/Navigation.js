import { GiHamburgerMenu } from "react-icons/gi";
import { isMobile } from "../helpers/helper-funcs";
import { IconContext } from "react-icons";

export const Navigation = ({ toggleMobileMenu, showMobileMenu }) => {
  return (
    <div className="bg-gradient-to-r from-secondary to-primary border-t-1/2 border-tertiary">
      <div className="container mx-auto">
        {isMobile() ? (
          <div className="flex justify-end">
            <button onClick={() => toggleMobileMenu(true)}>
              <IconContext.Provider
                value={{
                  className: "fill-white w-10 h-10 p-1 right-2 relative",
                }}
              >
                <GiHamburgerMenu />
              </IconContext.Provider>
            </button>
          </div>
        ) : (
          <nav className="nav">
            <ul>
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
        )}
      </div>
    </div>
  );
};
