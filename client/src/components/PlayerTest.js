import placeholderFull from "../images/player-placeholder-full.png";

export const PlayerTest = ({ player }) => {
  return (
    <tr className="border-b divide-x-2">
      <td>
        <p>{player.name}</p>
        <p>{player.position}</p>
        <p>{player.number}</p>
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
