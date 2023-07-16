import { dummyFixtures } from "../dummyData";
import { Fixture } from "../components/Fixture";
import { useState } from "react";

export const Fixtures = () => {
  const [filter, setFilter] = useState("all");

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
        {dummyFixtures.map((fixture) => {
          switch (filter) {
            case "all":
              return <Fixture fixture={fixture} />;
              break;
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
