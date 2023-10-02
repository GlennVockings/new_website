import { SlimTable } from "../components/SlimTable";
import newsImg1 from "../images/oxted-1.jpg";
import newsImg2 from "../images/oxted-2.jpg";
import newsImg3 from "../images/oxted-3.webp";
import { SlimFixture } from "../components/SlimFixture";
import { SlimResults } from "../components/SlimResults";

export const Home = () => {
  return (
    <>
      <div className="text-center pb-4">
        <h1 className="text-2xl font-bold">Oxted FC</h1>
      </div>
      <div className="">
        {/* Team Update */}
        <div className="flex items-center justify-around py-5 shadow-lg rounded-lg">
          <div>
            <SlimFixture />
          </div>
          <div>
            <SlimResults />
          </div>
          <div>
            <SlimTable />
          </div>
        </div>

        {/* News */}
        <div className="py-5">
          <p className="font-semibold text-4xl pb-3">News</p>
          <div className="flex gap-3">
            <div className="flex flex-col justify-between shadow w-1/3">
              <div className="relative h-64 w-full">
                <img
                  src={newsImg1}
                  className="absolute h-full w-full object-cover"
                  alt="news"
                />
              </div>
              <div className="p-2">
                <p className="text-xl font-semibold">News Headline 1</p>
                <p>News subtitle that describes something</p>
              </div>
            </div>
            <div className="flex flex-col justify-between shadow w-1/3">
              <div className="relative h-64 w-full">
                <img
                  src={newsImg2}
                  className="absolute h-full w-full object-cover"
                  alt="news"
                />
              </div>
              <div className="p-2">
                <p className="text-xl font-semibold">News Headline 2</p>
                <p>News subtitle that describes something</p>
              </div>
            </div>
            <div className="flex flex-col justify-between shadow w-1/3">
              <div className="relative h-64 w-full">
                <img
                  src={newsImg3}
                  className="absolute h-full w-full object-cover"
                  alt="news"
                />
              </div>
              <div className="p-2">
                <p className="text-xl font-semibold">News Headline 3</p>
                <p>News subtitle that describes something</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
