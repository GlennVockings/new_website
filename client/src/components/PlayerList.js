import placeholderFull from "../images/player-placeholder-full.png";
import placeholder from "../images/player-placeholder.png";

export const PlayerList = () => {
  return (
    <div className="flex flex-wrap justify-center items-end space-x-4 space-y-24">
      {/* player container */}
      <div className="player-card player-card-logo-test">
        <div className="relative">
          <div className="header">
            <p className="number">#12</p>
            <img
              className="logo"
              src="/assets/images/oxted-fc.png"
              alt="Oxted logo"
            />
            <div className="name">
              <p>JOHN</p>
              <p>WICK</p>
            </div>
          </div>
          <div className="position">
            <p>Goalkeeper</p>
          </div>
          <img
            className="placeholder"
            src={placeholderFull}
            alt="placeholder"
          />
        </div>
      </div>
      {/* player container 2 */}
      <div className="player-card player-card-logo-test">
        <div className="relative">
          <div className="header">
            <p className="number">#12</p>
            <img
              className="logo"
              src="/assets/images/oxted-fc.png"
              alt="Oxted logo"
            />
            <div className="name">
              <p>JOHN</p>
              <p>WICK</p>
            </div>
          </div>
          <div className="position">
            <p>Goalkeeper</p>
          </div>
          <img
            className="placeholder"
            src={placeholderFull}
            alt="placeholder"
          />
        </div>
      </div>
      {/* player container hover test */}
      <div className="player-card player-card-logo-test">
        <div className="relative">
          <div className="header">
            <p className="number">#12</p>
            <img
              className="logo"
              src="/assets/images/oxted-fc.png"
              alt="Oxted logo"
            />
            <div className="name">
              <p>JOHN</p>
              <p>WICK</p>
            </div>
          </div>
          <div className="position">
            <p>Goalkeeper</p>
          </div>
          <img
            className="placeholder"
            src={placeholderFull}
            alt="placeholder"
          />
        </div>
      </div>
      {/* player container 2 hover test */}
      <div className="player-card player-card-logo-test">
        <div className="relative">
          <div className="header">
            <p className="number">#12</p>
            <img
              className="logo"
              src="/assets/images/oxted-fc.png"
              alt="Oxted logo"
            />
            <div className="name">
              <p>JOHN</p>
              <p>WICK</p>
            </div>
          </div>
          <div className="position">
            <p>Goalkeeper</p>
          </div>
          <img
            className="placeholder"
            src={placeholderFull}
            alt="placeholder"
          />
        </div>
      </div>
    </div>
  );
};
