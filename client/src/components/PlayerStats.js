import { useQuery } from "@apollo/client";
import { STATS } from "../queries/playerQueries";
import { Loading } from "./ui/Loading";
import { PlayerCard } from "./ui/PlayerCard";

export const PlayrStats = () => {
  const { loading, data } = useQuery(STATS);

  if (loading) return <Loading />;

  console.log(data);

  return (
    <div>
      <p className="font-bold uppercase text-4xl pb-3 flex relative before:absolute before:top-5 before:content-[''] before:w-32 before:h-6 before:bg-primary/20 before:rounded-md">
        Players stats
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {data.stats.map((stat, index) => {
          return <PlayerCard key={index} {...stat} />;
        })}
      </div>
    </div>
  );
};
