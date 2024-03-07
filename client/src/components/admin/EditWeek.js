import { Link, useParams, useNavigate } from "react-router-dom";
import { Loading } from "../ui/Loading";
import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import { GET_WEEK } from "../../queries/weekQueries";
import { BsSendFill } from "react-icons/bs";
import { UPDATE_WEEK } from "../../mutations/weekMutations";

export const EditWeek = () => {
  const { id } = useParams();
  const [week, setWeek] = useState(0);
  const [wc, setWc] = useState("");
  const navigate = useNavigate();

  const { loading, data } = useQuery(GET_WEEK, {
    variables: { id },
    onCompleted: (data) => {
      setWeek(data.week.week);
      setWc(data.week.wc);
    },
  });

  const [updateWeek] = useMutation(UPDATE_WEEK, {
    variables: { id, week, wc },
    refetchQueries: [{ query: GET_WEEK, variables: { id } }],
    onCompleted: () => {
      navigate("/");
    },
  });

  const onSubmit = () => {
    updateWeek(id, week, wc);
  };

  if (loading) return <Loading />;

  return (
    <>
      <div className="pb-3 flex justify-between">
        <h2 className="text-3xl font-bold underline">Edit Week</h2>
        <Link to="/admin" className="btn btn-secondary">
          Back
        </Link>
      </div>
      <form onSubmit={onSubmit}>
        <div className="pb-4">
          <label className="text-xl pr-2">Week:</label>
          <input
            type="string"
            className="text-xl border-2 rounded-md p-2"
            value={week}
            onChange={(e) => setWeek(Number(e.target.value))}
          />
        </div>
        <div className="pb-4">
          <label className="text-xl pr-2">W/C:</label>
          <input
            className="text-xl border-2 rounded-md p-2"
            type="string"
            value={wc}
            onChange={(e) => setWeek(e.target.value)}
          />
        </div>
        <div className="flex">
          <button className="btn btn-primary">
            Submit <BsSendFill />
          </button>
        </div>
      </form>
    </>
  );
};
