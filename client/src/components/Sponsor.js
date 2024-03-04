import cst from "../images/cst_property.webp";
import kempton from "../images/kempton_homes.svg";
import cb from "../images/cb_event_group.webp";

export const Sponsor = () => {
  return (
    <div>
      <p className="font-bold uppercase text-4xl pb-3 flex relative before:absolute before:top-6 before:content-[''] before:w-52 before:h-3 before:bg-primary/20 before:rounded-md">
        Sponsors
      </p>
      <div className="grid grid-cols-3 place-items-center gap-4 h-52 py-4">
        <img className="h-44" src={cb} alt="CB Event Group" />
        <div className="bg-[#103a71] w-full">
          <img src={kempton} alt="Kempton homes" />
        </div>
        <img className="h-44" src={cst} alt="CST Property" />
      </div>
    </div>
  );
};
