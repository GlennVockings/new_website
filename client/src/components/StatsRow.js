import placeholderFull from "../images/player-placeholder-full.png";

export const StatsRow = ({ stats }) => {
  return (
    <tr className="border-b divide-x-2">
      {stats.map((player) => {
        return <td>{player}</td>;
      })}
    </tr>
  );
};
