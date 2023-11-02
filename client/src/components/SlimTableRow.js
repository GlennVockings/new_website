export const SlimTableRow = ({ position, entry, cssClass }) => {
  return (
    <tr key={position} className={`${cssClass}`}>
      <td>{position}</td>
      <td className="name">{entry.name}</td>
      <td>{entry.played}</td>
      <td className="md:hidden">{entry.wins}</td>
      <td className="md:hidden">{entry.draws}</td>
      <td className="md:hidden">{entry.loses}</td>
      <td>{entry.points}</td>
    </tr>
  );
};
