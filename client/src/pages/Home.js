import { SlimTable } from "../components/SlimTable";
import { SlimFixture } from "../components/SlimFixture";
import { SlimResults } from "../components/SlimResults";
import { Wrapper } from "../components/wrapper/Wrapper";
import { Headline } from "../components/Headline";
import { NewsCard } from "../components/ui/NewsCard";
import { mockNews } from "../mockData/mockData";
import { PlayrStats } from "../components/PlayerStats";

export const Home = () => {
  return (
    <>
      <div className="">
        {/* Team Update */}
        <Wrapper>
          <div className="flex flex-col items-center justify-around py-5 shadow-lg rounded-lg lg:flex-row">
            <SlimFixture />
            <SlimResults />
            <SlimTable />
          </div>
        </Wrapper>

        {/* News */}
        <Wrapper background="">
          <p className="font-bold uppercase text-4xl pb-3 flex relative before:absolute before:top-5 before:content-[''] before:w-32 before:h-6 before:bg-primary/20 before:rounded-md">
            News
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-3">
            {mockNews.map((news, index) => {
              if (index > 3) return "";
              return <NewsCard key={news.title} {...news} />;
            })}
          </div>
        </Wrapper>

        {/* Top player stats */}
        <Wrapper>
          <PlayrStats />
        </Wrapper>

        {/* News */}
        <Wrapper background="">
          <p className="font-bold uppercase text-4xl pb-3 flex relative before:absolute before:top-5 before:content-[''] before:w-32 before:h-6 before:bg-primary/20 before:rounded-md">
            News
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-3">
            {mockNews.map((news, index) => {
              if (index < 4) return "";
              return <NewsCard key={news.title} {...news} />;
            })}
          </div>
        </Wrapper>

        <Wrapper>
          <Headline />
        </Wrapper>
      </div>
    </>
  );
};
