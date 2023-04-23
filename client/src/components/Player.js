import placeholderFull from "../images/player-placeholder-full.png";

export const Player = () => {
  return (
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
        <img className="placeholder" src={placeholderFull} alt="placeholder" />
      </div>
    </div>
  );
};
