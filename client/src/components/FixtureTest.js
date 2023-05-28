import { GiSoccerField } from "react-icons/gi";
import { BsClock } from "react-icons/bs";
import { convertDate } from "../helpers/helper-funcs";

export const FixtureTest = ({ fixture }) => {
  return (
    <div>
      <div className="p-4 rounded-t-lg border shadow-inner">
        <div className="py-4 text-2xl uppercase font-bold">
          <p>{fixture.home}</p>
        </div>
        <div className="flex justify-center py-4">
          <p className="text-4xl">V</p>
        </div>
        <div className="py-4 text-2xl uppercase font-bold flex justify-end">
          <p>{fixture.away}</p>
        </div>
      </div>
      <div className="flex rounded-b-lg">
        <div className="flex py-2 w-1/2 text-white justify-center bg-primary">
          <BsClock />
          {convertDate(fixture.date)}
        </div>
        <div className="flex py-2 w-1/2 text-white justify-center bg-primary">
          <GiSoccerField />
          {fixture.venue}
        </div>
      </div>
    </div>
  );
};
