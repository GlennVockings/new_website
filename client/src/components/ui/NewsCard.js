export const NewsCard = ({ src, title, description }) => {
  return (
    <div className="flex flex-col justify-between shadow">
      <div className="relative h-72 md:h-64 w-full">
        <img
          src={src}
          className="absolute h-full w-full object-cover"
          alt="news"
        />
      </div>
      <div className="py-6 px-2 bg-white">
        <p className="text-xl font-semibold">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
