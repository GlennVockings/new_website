import { SlimTable } from "../components/SlimTable";
import { SlimFixture } from "../components/SlimFixture";
import { SlimResults } from "../components/SlimResults";
import { Wrapper } from "../components/wrapper/Wrapper";
import { Headline } from "../components/Headline";
import { news } from "../helpers/constants";

export const Home = () => {
  return (
    <>
      <div className="">
        {/* Team Update */}
        <Wrapper>
          <div className="flex flex-col items-center justify-around py-5 shadow-lg rounded-lg md:flex-row">
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
        </Wrapper>

        {/* News */}
        <Wrapper background="bg-primary">
          <p className="font-semibold text-4xl pb-3 text-white underline underline-offset-4">
            News
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="flex flex-col justify-between shadow">
              <div className="relative h-64 w-full">
                <img
                  src={news[0].image}
                  className="absolute h-full w-full object-cover"
                  alt="news"
                />
              </div>
              <div className="py-4 px-2 bg-white">
                <p className="text-xl font-semibold">News Headline 1</p>
                <p>News subtitle that describes something</p>
              </div>
            </div>
            <div className="flex flex-col justify-between shadow">
              <div className="relative h-64 w-full">
                <img
                  src={news[1].image}
                  className="absolute h-full w-full object-cover"
                  alt="news"
                />
              </div>
              <div className="p-2">
                <p className="text-xl font-semibold">News Headline 2</p>
                <p>News subtitle that describes something</p>
              </div>
            </div>
            <div className="flex flex-col justify-between shadow">
              <div className="relative h-64 w-full">
                <img
                  src={news[2].image}
                  className="absolute h-full w-full object-cover"
                  alt="news"
                />
              </div>
              <div className="p-2">
                <p className="text-xl font-semibold">News Headline 3</p>
                <p>News subtitle that describes something</p>
              </div>
            </div>
            <div className="flex flex-col justify-between shadow">
              <div className="relative h-64 w-full">
                <img
                  src={news[3].image}
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
        </Wrapper>

        {/* News */}
        <Wrapper>
          <p className="font-semibold text-4xl pb-3 underline underline-offset-4">
            News
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="flex flex-col justify-between shadow rounded-lg">
              <div className="relative h-64 w-full">
                <img
                  src={news[4].image}
                  className="absolute h-full w-full object-cover rounded-t-md"
                  alt="news"
                />
              </div>
              <div className="p-2">
                <p className="text-xl font-semibold">News Headline 1</p>
                <p>News subtitle that describes something</p>
              </div>
            </div>
            <div className="flex flex-col justify-between shadow">
              <div className="relative h-64 w-full">
                <img
                  src={news[5].image}
                  className="absolute h-full w-full object-cover"
                  alt="news"
                />
              </div>
              <div className="p-2">
                <p className="text-xl font-semibold">News Headline 2</p>
                <p>News subtitle that describes something</p>
              </div>
            </div>
            <div className="flex flex-col justify-between shadow">
              <div className="relative h-64 w-full">
                <img
                  src={news[6].image}
                  className="absolute h-full w-full object-cover"
                  alt="news"
                />
              </div>
              <div className="p-2">
                <p className="text-xl font-semibold">News Headline 3</p>
                <p>News subtitle that describes something</p>
              </div>
            </div>
            <div className="flex flex-col justify-between shadow">
              <div className="relative h-64 w-full">
                <img
                  src={news[7].image}
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
        </Wrapper>

        <Wrapper>
          <Headline />
        </Wrapper>
      </div>
    </>
  );
};
