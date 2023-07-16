import placeholderFull from "../images/player-placeholder-full.png";

export const PlayerTest = ({ name, number, position, stats }) => {
  return (
    <tr className="border-b divide-x-2">
      <td>{name}</td>
      <td>{stats.appearances}</td>
      <td>{stats.goals}</td>
      <td>{stats.penalties}</td>
      <td>{stats.assists}</td>
      <td>{stats.yellowCards}</td>
      <td>{stats.redCards}</td>
      <td>{stats.started}</td>
      <td>{stats.mom}</td>
      <td>{stats.cleanSheets}</td>
    </tr>
  );
};
