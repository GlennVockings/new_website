import { FaPlay } from "react-icons/fa6";
import { formatDate } from "../../helpers/helper-funcs";
import { FaCalendar } from "react-icons/fa6";

export const VideoCard = ({ src, title, description, date }) => {
  return (
    <div className="flex flex-col justify-between shadow">
      <div className="relative h-72 md:h-64 w-full">
        <img
          src={src}
          className="absolute h-full w-full object-cover"
          alt="news"
        />
        <div className="absolute top-1/2 left-1/2 rounded-full bg-black/50 h-16 w-16 flex justify-center items-center -translate-y-1/2 -translate-x-1/2 text-white text-3xl">
          <FaPlay />
        </div>
      </div>
      <div className="flex flex-col gap-1 py-4 px-2 bg-white">
        <p className="text-xs flex gap-2 items-center text-gray-500">
          <FaCalendar />
          {formatDate(date)}
        </p>
        <p className="text-xl font-bold">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
