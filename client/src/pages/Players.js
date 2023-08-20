import { PlayerTest } from "../components/PlayerTest";

import { gql, useQuery } from "@apollo/client";

const GET_PLAYERS = gql`
  {
    players {
      name
      number
      position
      appearances
      goals
      penalties
      assists
      yellowCards
      redCards
      started
      mom
      cleanSheets
    }
  }
`;

export const Players = () => {
  const { loading, data } = useQuery(GET_PLAYERS);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {!loading && (
        <div className="container mx-auto md:overflow-x-scroll">
          <table className="player-table">
            <thead>
              <tr className="header">
                <th>Players</th>
                <th>Appearances</th>
                <th>Goals</th>
                <th>Penalties</th>
                <th>Assists</th>
                <th>Yellow Cards</th>
                <th>Red Cards</th>
                <th>Started</th>
                <th>Man of the Match</th>
                <th>Clean Sheets</th>
              </tr>
            </thead>
            <tbody>
              {data.players.map((player) => {
                return <PlayerTest player={player} />;
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
