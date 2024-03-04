import { FaPlay } from "react-icons/fa6";

export const VideoCard = ({ src, title, description }) => {
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
      <div className="py-6 px-2 bg-white">
        <p className="text-xl font-semibold">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
