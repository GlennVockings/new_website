import { Fixture } from "./components/Fixture";
import { Header } from "./components/Header";
import { PlayerList } from "./components/PlayerList";
import { dummyData } from "./dummyData";

function App() {
  return (
    <>
      <Header />

      <div className="">
        <div className="container mx-auto py-3 flex flex-col divide-y">
          {dummyData.map((fixture) => {
            return <Fixture fixture={fixture} />;
          })}
        </div>

        <div className="container mx-auto py-16 bg-gray-300">
          <PlayerList />
        </div>
      </div>
    </>
  );
}

export default App;
