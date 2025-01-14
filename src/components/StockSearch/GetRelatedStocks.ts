const GetRelatedStockApi = async (ticker: string) => {
  try {
    const response = await fetch(
      `https://api.polygon.io/v1/related-companies/${ticker}?apiKey=${
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

export default GetRelatedStockApi;
