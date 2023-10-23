import { useState } from "react";
import { AdminFixtures } from "../components/admin/AdminFixtures";
import { AdminPlayers } from "../components/admin/AdminPlayers";
import { AdminWeeks } from "../components/admin/AdminWeeks";
import { FixtureModal } from "../components/modals/FixtureModal";
import { PlayerModal } from "../components/modals/PlayerModal";
import { WeeksModal } from "../components/modals/WeeksModal";
import { Wrapper } from "../components/wrapper/Wrapper";

export const Admin = () => {
  const [modalOpen, setModalOpen] = useState("");

  const handleModalChange = (name) => {
    setModalOpen((prevState) => (prevState === name ? "" : name));
  };

  return (
    <>
      <div className="flex justify-center pt-3 pb-4">
        <h2 className="text-4xl font-bold underline underline-offset-4">
          Admin Page
        </h2>
      </div>
      <Wrapper>
        <AdminFixtures handleOpen={() => handleModalChange("fixture")} />
        <AdminPlayers handleOpen={() => handleModalChange("player")} />
        <AdminWeeks handleOpen={() => handleModalChange("week")} />
      </Wrapper>
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
