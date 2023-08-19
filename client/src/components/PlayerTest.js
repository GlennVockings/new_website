import placeholderFull from "../images/player-placeholder-full.png";

export const PlayerTest = ({ name, number, position }) => {
  return (
    <th className="border-b divide-x-2">
      <p>{name}</p>
      <p>{position}</p>
      <p>{number}</p>
    </th>
  );
};
