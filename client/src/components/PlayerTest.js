import placeholderFull from "../images/player-placeholder-full.png";

export const PlayerTest = ({ name, number, position, statsView }) => {
    const nameSplit = name.split(" ");
    
    return (
        <div className={`player-card ${statsView ? "show-stats" : ""}`}>
      <div className="relative">
        <div className="header">
          <p className="number">#{number}</p>
          <img
            className="logo"
            src="/assets/images/oxted-fc.png"
            alt="Oxted logo"
          />
          <div className="name">
            <p>{nameSplit[0]}</p>
            <p>{nameSplit[1]}</p>
          </div>
        </div>
        <div className="position-container">
          <p className="position">{statsView ? name : position}</p>
          <div className="stats">
            <p>Stats</p>
            <div className="flex justify-between">
              <p>Appearances:</p>
              <p>12</p>
            </div>
            <div className="flex justify-between">
              <p>Goals:</p>
              <p>2</p>
            </div>
            <div className="flex justify-between">
              <p>Yellow Cards:</p>
              <p>1</p>
            </div>
            <div className="flex justify-between">
              <p>Started:</p>
              <p>6</p>
            </div>
            <div className="flex justify-between">
              <p>Clean Sheets:</p>
              <p>6</p>
            </div>
            <div className="flex justify-between">
              <p>Subbed:</p>
              <p>6</p>
            </div>
            <div className="flex justify-between">
              <p>Red Cards:</p>
              <p>6</p>
            </div>
          </div>
        </div>
        <img className="placeholder" src={placeholderFull} alt="placeholder" />
      </div>
    </div>
    )
}