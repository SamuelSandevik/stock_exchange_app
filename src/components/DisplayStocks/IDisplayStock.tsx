export interface IDisplayStock {
  ticker: string;
  results: [
    {
      o: number;
      c: number;
      h: number;
      l: number;
    }
  ];
}
