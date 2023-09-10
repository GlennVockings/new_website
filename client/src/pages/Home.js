import { useState } from "react";
import { AdminFixtures } from "../components/AdminFixtures";
import { AdminPlayers } from "../components/AdminPlayers";
import { AdminWeeks } from "../components/AdminWeeks";
import { FixtureModal } from "../components/FixtureModal";
import { PlayerModal } from "../components/PlayerModal";

export const Home = () => {
  const [fixturesModal, setFixturesModal] = useState(false);

  const handleFixtuuresModal = () => {
    setFixturesModal(fixturesModal ? false : true);
  };

  return (
    <>
      <div className="flex justify-center">
        <h2 className="text-4xl font-bold underline">Admin Page</h2>
      </div>
      <AdminFixtures handleOpen={handleFixtuuresModal} />
      <AdminPlayers />
      <AdminWeeks />
      <FixtureModal handleClose={handleFixtuuresModal} show={fixturesModal} />
      <PlayerModal />
    </>
  );
};
