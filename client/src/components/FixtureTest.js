import { GiSoccerField } from "react-icons/gi";
import { BsClock } from "react-icons/bs";
import { convertDate } from "../helpers/helper-funcs";
import { IconContext } from "react-icons";
import { getStatus } from '../helpers/helper-funcs';
import { useState, useEffect } from 'react';

export const FixtureTest = ({ fixture }) => {
    const [ status, setStatus ] = useState(null);
    
    useEffect(() => {
        const newStatus = getStatus(fixture);
        setStatus( newStatus );
    }, [])

  return (
    <div className="flex flex-col shadow-xl rounded-xl">
      <div className={`rounded-t-xl bg-black text-white text-center`}>
        { status }
      </div>
      <div className={`grow flex flex-col justify-end px-4 shadow-inner ${ status === "" ? 'rounded-t-xl' : ''}`}>
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
      <div className="flex rounded-b-xl bg-primary shadow-inner">
        <div className="flex items-center py-2 w-1/2 text-white justify-center">
            <IconContext.Provider value={{ size: '1.5rem' }}>
              <div className="pr-1">
                <BsClock />
              </div>
            </IconContext.Provider>
            {convertDate(fixture.date)}
        </div>
        <div className="flex items-center py-2 w-1/2 text-white justify-center">
            <IconContext.Provider value={{ size: '2rem' }}>
              <div className="pr-1">
                <GiSoccerField />
              </div>
            </IconContext.Provider>
            {fixture.venue}
        </div>
      </div>
    </div>
  );
};
