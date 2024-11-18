const GetRelatedStockApiAlphaV = async (ticker: string) => {
  const API_KEY = "J6GO8J0TPZCB62V3"; // Replace with your API key

  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${ticker}&apikey=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();

    // Check if the response contains "bestMatches"
    if (!data.bestMatches) {
      console.error("No matches found in the response:", data);
      return [];
    }

    // Map the results to a simpler format
    const results = data.bestMatches.map((match: any) => ({
      ticker: match["1. symbol"], // Extract the symbol
      name: match["2. name"], // Extract the company name
      region: match["4. region"], // Optional: region info
    }));

    return results;
  } catch (error) {
    console.error("There was an error fetching the API:", error);
    return [];
  }
};

export default GetRelatedStockApiAlphaV;
