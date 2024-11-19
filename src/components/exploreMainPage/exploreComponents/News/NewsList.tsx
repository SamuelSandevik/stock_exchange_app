import React, { useEffect, useState } from "react";
import GetNewsStockApiAlphaV from "../../../StockSearch/NewsStockApi";
import { NewsItem } from "./NewsItem";
import { formatTime } from "./TimeFormatter";

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
    <div className="news-list">
      <h3>News</h3>
      {news.length === 0 ? (
        <p>No news available.</p>
      ) : (
        <ul>
          {news.map((item, index) => (
            <li key={index} className="news-item">
              <div>
                <div>
                  {item.source} | {formatTime(item.timePublished)}
                </div>
                <h4>{item.title}</h4>
                <p>{item.summary}</p>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  Article link
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewsList;
