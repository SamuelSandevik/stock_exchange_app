import React, { useEffect, useState } from "react";
import GetNewsStockApiAlphaV from "../../../StockSearch/NewsStockApi";
import { NewsItem } from "./NewsItem";
import { formatTime } from "./TimeFormatter";
import "../../../Homepage/scss/_news.scss";

const NewsList: React.FC<{ ticker: string }> = ({ ticker }) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const newsData = (await GetNewsStockApiAlphaV("mock")) as NewsItem[];
        setNews(newsData);
      } catch (error) {
        setError("Failed to fetch news data");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [ticker]);

  if (loading) return <div>Loading news...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="news">
      <h3 className="title">News</h3>
      {news.length === 0 ? (
        <p>No news available.</p>
      ) : (
        <div className="newsSuperContainer">
          {news.map((item, index) => (
            <div key={index} className="newsContainer">
              <h2 className="newsTitle">{item.title}</h2>
              <p className="newsBody">{item.summary}</p>
              <div className="date">
                {item.source} | {formatTime(item.timePublished)}
              </div>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="articleLink"
              >
                Article link
              </a>
              <div className="line"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsList;
