import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-primary">
      <div className="flex gap-2 text-white py-4 m-auto xl:max-w-7xl lg:max-w-4xl md:max-w-2xl">
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaXTwitter />
        </a>
        <a href="#">
          <FaFacebookSquare />
        </a>
      </div>
    </div>
  );
};
