import { Link, useParams, useNavigate } from "react-router-dom";
import { Loading } from "./Loading";
import { Dropdown } from "./Dropdown";
import { useQuery, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_WEEK } from "../queries/weekQueries";
import { status } from "../helpers/constants";
import { BsSendFill } from "react-icons/bs";
import { UPDATE_WEEK } from "../mutations/weekMutations";

export const EditWeek = () => {
  const { id } = useParams();
  const [week, setWeek] = useState(0);
  const [wc, setWc] = useState("");
  const [weekStatus, setWeekStatus] = useState("");
  const navigate = useNavigate();

  const { loading, data } = useQuery(GET_WEEK, {
    variables: { id },
    onCompleted: (data) => {
      setWeek(data.week.week);
      setWc(data.week.wc);
    },
  });

  const [updateWeek] = useMutation(UPDATE_WEEK, {
    variables: { id, week, wc, status: weekStatus },
    refetchQueries: [{ query: GET_WEEK, variables: { id } }],
    onCompleted: () => {
      navigate("/");
    },
  });

  const onSubmit = () => {
    if (weekStatus === "") {
      alert("Opps you have missed a field");
    }
    updateWeek(id, week, wc, weekStatus);
  };

  if (loading) return <Loading />;

  return (
    <>
      <div className="pb-3 flex justify-between">
        <h2 className="text-3xl font-bold underline">Edit Week</h2>
        <Link to="/" className="btn btn-secondary">
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
        <div className="pb-4">
          <label className="text-xl pr-2">Status:</label>
          <Dropdown
            options={status}
            name="status"
            callback={(e) => setWeekStatus(e.target.value)}
            cssClass="text-xl p-2 border-2 rounded-mds"
            activeOption={weekStatus}
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
