export const generateMockMetrics = () => {
    const getRandomVolume = () => `${(Math.random() * 10 + 1).toFixed(3)} M`; // Vol in millions
    const getRandomPE = () => (Math.random() * 50 + 10).toFixed(2); // PE ratio
    const getRandomMarketCap = () => {
      const scale = ["M", "B", "T"];
      const value = (Math.random() * 2000 + 10).toFixed(3); // Random value between 10 and 2000
      const suffix = scale[Math.floor(Math.random() * scale.length)]; // Random scale (M, B, T)
      return `${value} ${suffix}`;
    };
  
    return {
      volume: getRandomVolume(),
      peRatio: getRandomPE(),
      marketCap: getRandomMarketCap(),
    };
  };
