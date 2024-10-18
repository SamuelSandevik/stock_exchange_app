

const GetStockApi = async (ticker: string) => {
    try {
      const response = await fetch(
        `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/20/minute/2024-10-07/2024-10-16?adjusted=true&sort=asc&apiKey=qsYxsMPmpFENUUFxpzsmj9GzloEpL3CN`
      );
      const data = await response.json();
  
      return data.results;
    } catch (error) {
      console.error("There was an error fetching the API: ", error);
      return [];
    }
  };
  
  export default GetStockApi;
  