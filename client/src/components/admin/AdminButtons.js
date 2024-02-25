import { GoArrowRight } from "react-icons/go";

export const AdminButtons = ({ fixture, week, player }) => {
  return (
    <div className="flex justify-center gap-4">
      <button
        onClick={fixture}
        className="flex items-center gap-3 px-4 py-2 bg-tertiary text-white rounded-full hover:bg-secondary"
      >
        Add fixture <GoArrowRight />
      </button>
      <button
        onClick={player}
        className="flex items-center gap-3 px-4 py-2 bg-tertiary text-white rounded-full hover:bg-secondary"
      >
        Add player <GoArrowRight />
      </button>
      <button
        onClick={week}
        className="flex items-center gap-3 px-4 py-2 bg-tertiary text-white rounded-full hover:bg-secondary"
      >
        Add week <GoArrowRight />
      </button>
    </div>
  );
};
