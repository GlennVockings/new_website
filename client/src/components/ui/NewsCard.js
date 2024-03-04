import { formatDate } from "../../helpers/helper-funcs";
import { FaCalendar } from "react-icons/fa6";

export const NewsCard = ({ src, title, description, date }) => {
  return (
    <div className="flex flex-col justify-between shadow">
      <div className="relative h-72 md:h-64 w-full">
        <img
          src={src}
          className="absolute h-full w-full object-cover"
          alt="news"
        />
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
