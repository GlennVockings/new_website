import { Players } from "../components/Players";
import { useQuery } from "@apollo/client";
import { GET_PLAYERS } from "../queries/playerQueries";
import { Loading } from "../components/ui/Loading";

export const PlayersPage = () => {
  const { loading, data } = useQuery(GET_PLAYERS);

  if (loading) return <Loading />;

  return <>{!loading && <Players data={data.players} />}</>;
};
