export interface DailyOpenClose {
    afterHours: number;
    close: number;
    from: string;
    high: number;
    low: number;
    open: number;
    preMarket: number;
    status: string;
    symbol: string;
    volume: number;
  }
  
  export interface AggregateResult {
    c: number;
    h: number;
    l: number;
    n: number;
    o: number;
    t: number;
    v: number;
    vw: number;
  }
  
  export interface Aggregates {
    adjusted: boolean;
    next_url: string;
    queryCount: number;
    request_id: string;
    results: AggregateResult[];
    resultsCount: number;
    status: string;
    ticker: string;
  }