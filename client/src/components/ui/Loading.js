import { AiOutlineLoading } from "react-icons/ai";

export const Loading = () => {
  return (
    <div className="flex justify-center py-3">
      <div className="w-4 h-4 animate-spin">
        <AiOutlineLoading />
      </div>
      <span className="ml-4 tracking-wider">Loading...</span>
    </div>
  );
};
