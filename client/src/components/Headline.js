import { mockNews } from "../mockData/mockData";
import { useState } from "react";

export const Headline = () => {
  const [newsList, setNewsList] = useState(mockNews);
  const [mainNews, setMainNews] = useState(0);

  return (
    <div className="hidden md:block">
      <div>
        <p className="text-4xl underline font-semibold underline-offset-4">
          Headline
        </p>
      </div>
      <div className="flex flex-col justify-between md:flex-row">
        {/* Main Headline */}
        <div className="headline">
          <div className="image">
            <img src={newsList[mainNews].src} alt="News" />
          </div>
          <div className="content">
            <p>{newsList[mainNews].title}</p>
            <p>{newsList[mainNews].description}</p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="ml-3 rounded-md shadow-lg divide-y-2 divide-gray-100 h-200 overflow-x-scroll">
          {/* News falt layout */}
          {newsList.map((news, index) => {
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
