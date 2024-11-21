export interface NewsItem {
  title: string;
  url: string;
  timePublished: string;
  authors: string[];
  summary: string;
  bannerImage: string;
  source: string;
  overallSentimentScore: number;
  overallSentimentLabel: string;
}
