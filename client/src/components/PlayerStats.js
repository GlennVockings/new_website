import { useQuery } from "@apollo/client";
import { TOP_SCORER } from "../queries/playerQueries";
import { Loading } from "./ui/Loading";

export const PlayrStats = () => {
  const { loading, data } = useQuery(TOP_SCORER);

  if (loading) return <Loading />;

  console.log(data);

  return (
    <div>
      <div></div>
    </div>
  );
};
