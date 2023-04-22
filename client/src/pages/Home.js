import { dummyData } from "../dummyData";
import { Fixture } from "../components/Fixture";

export const Home = () => {
  return (
    <div className="container mx-auto py-3 flex flex-col divide-y">
      {dummyData.map((fixture) => {
        return <Fixture fixture={fixture} />;
      })}
    </div>
  );
};
