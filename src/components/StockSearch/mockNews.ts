export const mockNewsData = {
  items: "50",
  sentiment_score_definition:
    "x <= -0.35: Bearish; -0.35 < x <= -0.15: Somewhat-Bearish; -0.15 < x < 0.15: Neutral; 0.15 <= x < 0.35: Somewhat_Bullish; x >= 0.35: Bullish",
  relevance_score_definition:
    "0 < x <= 1, with a higher score indicating higher relevance.",
  feed: [
    {
      title:
        "Warren Buffett Just Bought 4 Stocks. Here's the Best of the Bunch.",
      url: "https://www.fool.com/investing/2024/11/19/warren-buffett-just-bought-4-stocks-heres-the-best/",
      time_published: "20241119T104100",
      authors: ["Keith Speights"],
      summary:
        "One of the world's greatest investors isn't doing much investing these days. Warren Buffett was a net seller of stocks for the eighth consecutive quarter in Q3...",
      banner_image:
        "https://g.foolcdn.com/editorial/images/798144/buffett6-tmf.jpg",
      source: "Motley Fool",
      category_within_source: "n/a",
      source_domain: "www.fool.com",
      topics: [
        { topic: "Retail & Wholesale", relevance_score: "0.333333" },
        { topic: "Financial Markets", relevance_score: "0.996023" },
        { topic: "Manufacturing", relevance_score: "0.333333" },
        { topic: "Earnings", relevance_score: "0.972193" },
        { topic: "Technology", relevance_score: "0.333333" },
      ],
      overall_sentiment_score: 0.324629,
      overall_sentiment_label: "Somewhat-Bullish",
      ticker_sentiment: [
        {
          ticker: "DMPZF",
          relevance_score: "0.056808",
          ticker_sentiment_score: "0.104936",
          ticker_sentiment_label: "Neutral",
        },
        {
          ticker: "AAPL",
          relevance_score: "0.056808",
          ticker_sentiment_score: "0.095019",
          ticker_sentiment_label: "Neutral",
        },
        // Add other tickers as needed
      ],
    },
    {
      title: "The Zacks Analyst Blog Highlights NVIDIA, Intel, Apple...",
      url: "https://www.zacks.com/stock/news/2371862/the-zacks-analyst-blog-highlights-nvidia-intel-taiwan-semiconductor-apple-microsoft-and-amazon",
      time_published: "20241119T100000",
      authors: ["Zacks Investment Research"],
      summary:
        "NVIDIA, Intel, Taiwan Semiconductor, Apple, Microsoft, and Amazon are included in this Analyst Blog.",
      banner_image:
        "https://staticx-tuner.zacks.com/images/articles/main/8d/2673.jpg",
      source: "Zacks Commentary",
      category_within_source: "n/a",
      source_domain: "www.zacks.com",
      topics: [
        { topic: "Retail & Wholesale", relevance_score: "0.333333" },
        { topic: "Financial Markets", relevance_score: "0.999997" },
        { topic: "Manufacturing", relevance_score: "0.333333" },
        { topic: "Earnings", relevance_score: "0.682689" },
        { topic: "Technology", relevance_score: "0.333333" },
      ],
      overall_sentiment_score: 0.157879,
      overall_sentiment_label: "Somewhat-Bullish",
      ticker_sentiment: [
        {
          ticker: "MSFT",
          relevance_score: "0.170576",
          ticker_sentiment_score: "-0.015262",
          ticker_sentiment_label: "Neutral",
        },
        {
          ticker: "NVDA",
          relevance_score: "0.516185",
          ticker_sentiment_score: "0.326411",
          ticker_sentiment_label: "Somewhat-Bullish",
        },
        // Add other tickers as needed
      ],
    },
  ],
};
