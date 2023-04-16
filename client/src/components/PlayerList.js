import placeholderFull from "../images/player-placeholder-full.png";
import placeholder from "../images/player-placeholder.png";

export const PlayerList = () => {
  return (
    <div className="flex flex-wrap justify-center items-end space-x-4 space-y-24">
      {/* player container */}
      <div className="w-64">
        <div className="relative">
          <div className="h-32 flex justify-end relative bg-red-900 rounded-t-lg overflow-hidden">
            <img
              className="absolute opacity-60 -left-14"
              src="/assets/images/oxted-fc.png"
              alt="Oxted logo"
            />
          </div>
          <div className="relative bg-red-600 text-white px-6 py-1 rounded-b-lg text-center z-20">
            <p>John Wick</p>
          </div>
          <img
            className="absolute bottom-0 right-0 h-64 w-auto mx-auto z-10"
            src={placeholderFull}
            alt="placeholder"
          />
        </div>
      </div>
      {/* player container 2 */}
      <div className="w-48">
        <div className="h-32 flex justify-end relative bg-red-100 rounded-t-lg">
          <img
            className="absolute bottom-0 w-48 h-auto mx-auto"
            src={placeholder}
            alt="placeholder"
          />
        </div>
        <div className="bg-red-600 text-white px-6 py-1 rounded-b-lg text-center">
          <p>John Wick</p>
        </div>
      </div>
      {/* player container 2 */}
      <div className="w-48">
        <div className="relative">
          <img
            className="absolute bottom-0 w-48 h-auto mx-auto"
            src={placeholder}
            alt="placeholder"
          />
        </div>
        <div className="bg-red-600 text-white px-6 py-1 rounded text-center">
          <p>John Wick</p>
        </div>
      </div>
      {/* player container */}
      <div className="w-64">
        <div className="relative">
          <div className="h-32 flex justify-start relative bg-red-600 rounded-t-lg overflow-hidden">
            <img
              className="absolute opacity-40 -left-14"
              src="/assets/images/oxted-fc.png"
              alt="Oxted logo"
            />
            <div className="flex flex-col justify-center text-white w-3/5 text-4xl font-bold text-end z-30 font-cursive">
              <p>JOHN</p>
              <p>WICK</p>
            </div>
          </div>
          <div className="relative bg-red-900 text-white px-6 py-1 rounded-b-lg text-center z-20">
            <p>Stats</p>
          </div>
          <img
            className="absolute bottom-0 right-0 h-64 w-auto mx-auto z-10"
            src={placeholderFull}
            alt="placeholder"
          />
        </div>
      </div>
      {/* player container */}
      <div className="w-64">
        <div className="relative">
          <div className="h-32 flex justify-start relative bg-red-600 rounded-t-lg overflow-hidden">
            <div className="flex flex-col justify-center text-white w-3/5 text-4xl font-bold text-end z-30 font-cursive">
              <p>JOHN</p>
              <p>WICK</p>
            </div>
          </div>
          <div className="relative bg-red-900 text-white px-6 py-1 rounded-b-lg text-center z-20">
            <p>Stats</p>
          </div>
          <img
            className="absolute bottom-0 right-0 h-64 w-auto mx-auto z-10"
            src={placeholderFull}
            alt="placeholder"
          />
        </div>
      </div>
    </div>
  );
};
