import { useQuery } from "@apollo/client";
import { GET_FIXTURES } from "../queries/fixtureQueries";

export const AdminFixtures = () => {
  const { loading, data } = useQuery(GET_FIXTURES);

  if (loading) return <p>Loading...</p>;

  return <div>AdminFixtures</div>;
};
