export const TableRow = ({ position, entry, cssClass }) => {
  return (
    <tr className={`${cssClass}`}>
      <td>{position}</td>
      <td className="name">{entry.name}</td>
      <td>{entry.played}</td>
      <td>{entry.wins}</td>
      <td>{entry.draws}</td>
      <td>{entry.loses}</td>
      <td>{entry.for}</td>
      <td>{entry.against}</td>
      <td>{entry.difference}</td>
      <td>{entry.points}</td>
    </tr>
  );
};
