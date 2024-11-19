import { mockNewsData } from "./mockNews";

const GetNewsStockApiAlphaV = async (ticker: string) => {
  // Use mock data in development mode or for testing
  if (ticker === "mock") {
    console.log("Using mock data for API response");
    return mockNewsData.feed;
  }

  try {
    const API_KEY = "----"; // Replace with your API key
    const response = await fetch(
      `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${ticker}&apikey=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();

    if (!data.feed) {
      console.error("No matches found in the response:", data);
      return [];
    }

    return data.feed.map((item: any) => ({
      title: item.title,
      url: item.url,
      timePublished: item.time_published,
      authors: item.authors,
      summary: item.summary,
      bannerImage: item.banner_image,
      source: item.source,
      overallSentimentScore: item.overall_sentiment_score,
      overallSentimentLabel: item.overall_sentiment_label,
    }));
  } catch (error) {
    console.error("There was an error fetching the API:", error);
    return [];
  }
};

export default GetNewsStockApiAlphaV;
