import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-primary">
      <div className="flex justify-between text-white py-4 m-auto xl:max-w-7xl lg:max-w-4xl md:max-w-2xl">
        <p>
          All data copied from{" "}
          <a
            className="underline"
            href="https://fulltime.thefa.com/index.html?selectedSeason=179247076&selectedFixtureGroupAgeGroup=0&selectedDivision=116511351&selectedCompetition=0"
          >
            FA full time
          </a>
        </p>
        <div className="flex gap-2 text-3xl">
          <a href="https://www.instagram.com/oxtedfc/?hl=en">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/oxtedfc?lang=en">
            <FaXTwitter />
          </a>
          <a href="https://www.facebook.com/OxtedFc">
            <FaFacebookSquare />
          </a>
        </div>
      </div>
    </div>
  );
};
