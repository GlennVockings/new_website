import placeholderFull from "../images/player-placeholder-full.png";

export const PlayerTest = ({ player }) => {
  return (
    <tr className="">
      <td className="info">
        <div className="icn-container">
          <img
            className="player-icn"
            src={placeholderFull}
            alt="player placeholder"
          />
        </div>
        <div className="text-container">
          <p className="info-name">{player.name}</p>
          <p className="info-position">{player.position}</p>
          <p className="info-number">{`#${player.number}`}</p>
        </div>
      </td>
      <td>{player.appearances}</td>
      <td>{player.goals}</td>
      <td>{player.penalties}</td>
      <td>{player.assists}</td>
      <td>{player.yellowCards}</td>
      <td>{player.redCards}</td>
      <td>{player.started}</td>
      <td>{player.mom}</td>
      <td>{player.cleanSheets}</td>
    </tr>
  );
};
