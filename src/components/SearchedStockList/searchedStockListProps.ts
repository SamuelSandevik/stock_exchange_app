export interface SearchedStockListProps {
  search: string;
  onSelected: (ticker: string) => void;
}
