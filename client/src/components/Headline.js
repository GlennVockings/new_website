import { mockNews } from "../mockData/mockData";
import { useState } from "react";

export const Headline = () => {
  const [mainNews, setMainNews] = useState(0);

  return (
    <div className="hidden md:block">
      <div>
        <p className="font-bold uppercase text-4xl pb-3 flex relative before:absolute before:top-6 before:content-[''] before:w-48 before:h-3 before:bg-primary/20 before:rounded-md">
          Headline
        </p>
      </div>
      <div className="flex flex-col justify-between md:flex-row">
        {/* Main Headline */}
        <div className="headline">
          <div className="image">
            <img src={mockNews[mainNews].src} alt="News" />
          </div>
          <div className="content">
            <p>{mockNews[mainNews].title}</p>
            <p>{mockNews[mainNews].description}</p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="ml-3 rounded-md shadow-lg divide-y-2 divide-gray-100 h-200 overflow-x-scroll">
          {/* News falt layout */}
          {mockNews.map((news, index) => {
            return (
              <div
                key={news.title}
                className="headline-flat"
                onClick={() => setMainNews(index)}
              >
                <div className="image">
                  <img src={news.src} alt="News" />
                </div>
                <div className="content">
                  <p className="text-xl">{news.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
