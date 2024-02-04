export const SlimTableRow = ({ position, entry, cssClass }) => {
  return (
    <tr key={position} className={`${cssClass}`}>
      <td>{position}</td>
      <td className="name">{entry.name}</td>
      <td>{entry.played}</td>
      <td className="lg:hidden">{entry.wins}</td>
      <td className="hidden sm:table-cell lg:hidden">{entry.draws}</td>
      <td className="hidden sm:table-cell lg:hidden">{entry.loses}</td>
      <td>{entry.points}</td>
    </tr>
  );
};
