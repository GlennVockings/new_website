export const WeeksModal = ({ handleClose, show }) => {
  return (
    <div
      className={`bg-black/80 absolute w-full h-full top-0 left-0 m-auto ${
        show === "week" ? "block" : "hidden"
      }`}
    >
      <div className="z-20 rounded opacity-100 absolute p-8 bg-white -translate-x-2/4 left-1/2 top-40">
        <div className="flex justify-between">
          <p className="text-5xl">Add fixture</p>
          <button onClick={handleClose}>X</button>
        </div>
        <form></form>
      </div>
    </div>
  );
};
