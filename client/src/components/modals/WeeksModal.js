import { useRef } from "react";
import { ADD_WEEK } from "../../mutations/weekMutations";
import { GET_WEEKS } from "../../queries/weekQueries";
import { useMutation } from "@apollo/client";
import { BsSendFill } from "react-icons/bs";

export const WeeksModal = ({ handleClose, show }) => {
  const weekRef = useRef();
  const wcRef = useRef();

  const [addWeek] = useMutation(ADD_WEEK, {
    update(cache, { data: { addWeek } }) {
      const { weeks } = cache.readQuery({ query: GET_WEEKS });
      cache.writeQuery({
        query: GET_WEEKS,
        data: { weeks: [...weeks, addWeek] },
      });
    },
    onCompleted() {
      handleClose();
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();

    addWeek({
      variables: {
        week: Number(weekRef.current.value),
        wc: wcRef.current.value,
      },
    });
  };

  return (
    <div
      className={`bg-black/80 absolute w-full h-full top-0 left-0 m-auto ${
        show === "week" ? "block" : "hidden"
      }`}
    >
      <div className="z-20 rounded opacity-100 absolute p-8 bg-white -translate-x-2/4 left-1/2 top-40">
        <div className="flex justify-between">
          <p className="text-5xl">Add Week</p>
          <button onClick={handleClose}>X</button>
        </div>
        <form onSubmit={onSubmit}>
          <input
            ref={weekRef}
            className="border rounded-md px-2"
            type="text"
            placeholder="Week"
          />
          <input
            ref={wcRef}
            className="border rounded-md px-2"
            type="text"
            placeholder="WC"
          />
          <div className="flex">
            <button className="btn btn-primary">
              Submit <BsSendFill />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
