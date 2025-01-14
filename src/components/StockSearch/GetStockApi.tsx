const GetStockApi = async (ticker: string) => {
  try {
    const response = await fetch(
      `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/20/minute/2024-10-20/2024-11-01?adjusted=true&sort=asc&apiKey=${
        import.meta.env.VITE_API_KEY_RELATED_STOCKS
      }`
    );
    const data = await response.json();

    return data.results;
  } catch (error) {
    console.error("There was an error fetching the API: ", error);
    return [];
  }
};

export default GetStockApi;
