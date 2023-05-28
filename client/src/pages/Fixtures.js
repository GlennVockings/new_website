import { dummyData } from "../dummyData";
import { FixtureTest } from "../components/FixtureTest";

export const Fixtures = () => {
  return (
    <div className="container mx-auto py-3 grid grid-cols-3 gap-6">
      {dummyData.map((fixture) => {
        return <FixtureTest fixture={fixture} />;
      })}
    </div>
  );
};
