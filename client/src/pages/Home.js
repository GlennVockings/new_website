import { AdminFixtures } from "../components/AdminFixtures";

export const Home = () => {
  return (
    <>
      <div className="flex justify-center">
        <h2 className="text-4xl font-bold underline">Admin Page</h2>
      </div>

      <AdminFixtures />
    </>
  );
};
