import { Fixture } from "../components/Fixture";
import { useState } from "react";

import { useQuery } from "@apollo/client";
import { GET_TEAM_FIXTURES } from "../queries/fixtureQueries";

export const Fixtures = () => {
  const { loading, data } = useQuery(GET_TEAM_FIXTURES, {
    variables: { teamName: "Oxted & District" },
  });

  const [filter, setFilter] = useState("all");

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="flex justify-center py-6">
        <div className="tabs">
          <button
            className={`tab ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`tab ${filter === "home" ? "active" : ""}`}
            onClick={() => setFilter("home")}
          >
            Home
          </button>
          <button
            className={`tab ${filter === "away" ? "active" : ""}`}
            onClick={() => setFilter("away")}
          >
            Away
          </button>
        </div>
      </div>
      <div className="container mx-auto py-3 flex flex-col divide-y">
        {data.fixture.map((fixture) => {
          switch (filter) {
            case "all":
              return <Fixture fixture={fixture} />;
            case "home":
              if (fixture.hoa.toLowerCase() === filter)
                return <Fixture fixture={fixture} />;
              break;
            case "away":
              if (fixture.hoa.toLowerCase() === filter)
                return <Fixture fixture={fixture} />;
              break;
            default:
              return <Fixture fixture={fixture} />;
          }
        })}
      </div>
    </>
  );
};
