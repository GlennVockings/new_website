export const SlimTableRow = ({ position, entry, cssClass }) => {
  return (
    <tr key={position} className={`${cssClass}`}>
      <td>{position}</td>
      <td className="name">{entry.name}</td>
      <td>{entry.played}</td>
      <td>{entry.points}</td>
    </tr>
  );
};
