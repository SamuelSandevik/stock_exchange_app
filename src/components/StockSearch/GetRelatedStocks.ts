const GetRelatedStockApi = async (ticker: string) => {
  console.log("hdakdj");
  try {
    const response = await fetch(
      `https://api.polygon.io/v1/related-companies/${ticker}?apiKey=qsYxsMPmpFENUUFxpzsmj9GzloEpL3CN`
    );
    const data = await response.json();

    return data.results;
  } catch (error) {
    console.error("There was an error fetching the API: ", error);
    return [];
  }
};

export default GetRelatedStockApi;
