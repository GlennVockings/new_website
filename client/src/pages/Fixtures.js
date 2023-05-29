import { dummyData } from "../dummyData";
import { FixtureTest } from "../components/FixtureTest";
import { useState } from 'react';

export const Fixtures = () => {
    const [ filter, setFilter ] = useState("all");
    
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
        <div className="container mx-auto py-3 grid grid-cols-3 place-content-stretch gap-6">
          {dummyData.map((fixture) => {
            switch(filter) {
                case "all": 
                    return <FixtureTest fixture={fixture} />;
                break;
                case "home":
                    if (fixture.home === "Oxted FC" ) return <FixtureTest fixture={fixture} />;
                break;
                case "away":
                    if (fixture.away === "Oxted FC" ) return <FixtureTest fixture={fixture} />;
                break;
                default:
                    return <FixtureTest fixture={fixture} />;
            }           
          })}
        </div>
    </>
  );
};
