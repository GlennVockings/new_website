import { BsSendFill } from "react-icons/bs";
import { useMutation } from "@apollo/client";
import { ADD_PLAYER } from "../../mutations/playerMutations";
import { GET_PLAYERS } from "../../queries/playerQueries";
import { useRef } from "react";

export const PlayerModal = ({ handleClose, show }) => {
  const nameRef = useRef();
  const numberRef = useRef();
  const positionRef = useRef();
  const appearancesRef = useRef();
  const startedRef = useRef();
  const cleanSheetsRef = useRef();
  const goalsRef = useRef();
  const penaltiesRef = useRef();
  const assistsRef = useRef();
  const yellowRef = useRef();
  const redRef = useRef();
  const momRef = useRef();

  const [addPlayer] = useMutation(ADD_PLAYER, {
    update(cache, { data: { addPlayer } }) {
      const { players } = cache.readQuery({ query: GET_PLAYERS });
      cache.writeQuery({
        query: GET_PLAYERS,
        data: { palyers: [...players, addPlayer] },
      });
    },
    onCompleted() {
      handleClose();
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();

    addPlayer({
      variables: {
        name: nameRef.current.value,
        number: Number(numberRef.current.value),
        position: positionRef.current.value,
        appearances: Number(appearancesRef.current.value),
        goals: Number(goalsRef.current.value),
        penalties: Number(penaltiesRef.current.value),
        assists: Number(assistsRef.current.value),
        yellowCards: Number(yellowRef.current.value),
        redCards: Number(redRef.current.value),
        started: Number(startedRef.current.value),
        mom: Number(momRef.current.value),
        cleanSheets: Number(cleanSheetsRef.current.value),
      },
    });
  };

  return (
    <div
      className={`bg-black/80 absolute w-full h-full top-0 left-0 m-auto ${
        show === "player" ? "block" : "hidden"
      }`}
    >
      <div className="z-20 rounded opacity-100 absolute p-8 bg-white -translate-x-2/4 left-1/2 top-40">
        <div className="flex justify-between items-center">
          <p className="text-4xl">Add player</p>
          <button onClick={handleClose}>X</button>
        </div>
        <form onSubmit={onSubmit}>
          <div className="pt-4 pb-2">
            <p className="text-xl underline underline-offset-4">Info</p>
          </div>
          <div className="grid grid-cols-3 gap-3 pb-3">
            <div className="pb-2">
              <input
                ref={nameRef}
                className="border rounded-md px-2"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="pb-2">
              <input
                ref={numberRef}
                className="border rounded-md px-2"
                type="text"
                placeholder="Number"
              />
            </div>
            <div className="pb-2">
              <input
                ref={positionRef}
                className="border rounded-md px-2"
                type="text"
                placeholder="Position"
              />
            </div>
          </div>
          <div className="pb-2">
            <p className="text-xl underline underline-offset-4">Stats</p>
          </div>
          <div className="grid grid-cols-3 gap-3 pb-3">
            <div className="flex flex-col">
              <label className="pb-1">Appearances</label>
              <input
                ref={appearancesRef}
                className="border rounded-md px-2"
                type="text"
                placeholder="Appearances"
              />
            </div>
            <div className="flex flex-col">
              <label className="pb-1">Started</label>
              <input
                ref={startedRef}
                className="border rounded-md px-2"
                type="text"
                placeholder="Started"
              />
            </div>
            <div className="flex flex-col">
              <label className="pb-1">Clean sheets</label>
              <input
                ref={cleanSheetsRef}
                className="border rounded-md px-2"
                type="text"
                placeholder="Clean sheets"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 pb-3">
            <div className="flex flex-col">
              <label className="pb-1">Goals</label>
              <input
                ref={goalsRef}
                className="border rounded-md px-2"
                type="text"
                placeholder="Goals"
              />
            </div>
            <div className="flex flex-col">
              <label className="pb-1">Penalties</label>
              <input
                ref={penaltiesRef}
                className="border rounded-md px-2"
                type="text"
                placeholder="Penalties"
              />
            </div>
            <div className="flex flex-col">
              <label className="pb-1">Assists</label>
              <input
                ref={assistsRef}
                className="border rounded-md px-2"
                type="text"
                placeholder="Assists"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 pb-3">
            <div className="flex flex-col">
              <label className="pb-1">Yellow Card</label>
              <input
                ref={yellowRef}
                className="border rounded-md px-2"
                type="text"
                placeholder="Yellow Card"
              />
            </div>
            <div className="flex flex-col">
              <label className="pb-1">Red Card</label>
              <input
                ref={redRef}
                className="border rounded-md px-2"
                type="text"
                placeholder="Red Card"
              />
            </div>
            <div className="flex flex-col">
              <label className="pb-1">Man of Matches</label>
              <input
                ref={momRef}
                className="border rounded-md px-2"
                type="text"
                placeholder="Man of Matches"
              />
            </div>
          </div>
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
