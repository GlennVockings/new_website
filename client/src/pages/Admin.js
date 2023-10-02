import { useState } from "react";
import { AdminFixtures } from "../components/admin/AdminFixtures";
import { AdminPlayers } from "../components/admin/AdminPlayers";
import { AdminWeeks } from "../components/admin/AdminWeeks";
import { FixtureModal } from "../components/modals/FixtureModal";
import { PlayerModal } from "../components/modals/PlayerModal";
import { WeeksModal } from "../components/modals/WeeksModal";

export const Admin = () => {
  const [modalOpen, setModalOpen] = useState("");

  const handleModalChange = (name) => {
    setModalOpen((prevState) => (prevState === name ? "" : name));
  };

  return (
    <>
      <div className="flex justify-center">
        <h2 className="text-4xl font-bold underline">Admin Page</h2>
      </div>
      <AdminFixtures handleOpen={() => handleModalChange("fixture")} />
      <AdminPlayers handleOpen={() => handleModalChange("player")} />
      <AdminWeeks handleOpen={() => handleModalChange("week")} />
      <FixtureModal
        handleClose={() => handleModalChange("fixture")}
        show={modalOpen}
      />
      <PlayerModal
        handleClose={() => handleModalChange("player")}
        show={modalOpen}
      />
      <WeeksModal
        handleClose={() => handleModalChange("week")}
        show={modalOpen}
      />
    </>
  );
};
