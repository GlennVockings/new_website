import { useQuery } from "@apollo/client";
import { STATS } from "../queries/playerQueries";
import { Loading } from "./ui/Loading";
import { PlayerCard } from "./ui/PlayerCard";
import { stats } from "../helpers/constants";

export const PlayrStats = () => {
  const { loading, data } = useQuery(STATS);

  if (loading) return <Loading />;

  return (
    <div>
      <p className="font-bold uppercase text-4xl pb-3 flex relative before:absolute before:top-6 before:content-[''] before:w-72 before:h-3 before:bg-primary/20 before:rounded-md">
        Players stats
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        {data.stats.map((stat, index) => {
          return <PlayerCard key={index} {...stat} {...stats[index]} />;
        })}
      </div>
    </div>
  );
};
