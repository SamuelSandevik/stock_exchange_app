import { useLocation } from "react-router-dom";
import { exampleData } from "../Homepage/LineChart/exampleData";
import StockPageLineChart from "./components/StockPageLineChart";
import GetStockApi from "../StockSearch/GetStockApi";
import { useEffect, useState } from "react";

const StockPage = () => {
  const location = useLocation();
  const searchTerm = location.state?.search;
  const [chartData, setChartData] = useState<{ x: number; y: number }[]>([]);

  const fallbackData = [
    { x: new Date("2024-01-01").getTime(), y: 150 },
    { x: new Date("2024-01-02").getTime(), y: 152 },
    { x: new Date("2024-01-03").getTime(), y: 151 },
    { x: new Date("2024-01-04").getTime(), y: 149 },
    { x: new Date("2024-01-05").getTime(), y: 155 },
    { x: new Date("2024-01-06").getTime(), y: 160 },
    { x: new Date("2024-01-07").getTime(), y: 165 },
  ];

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm) {
        try {
          const response = await GetStockApi(searchTerm);
          const transformedData = response.map((dataPoint: any) => ({
            x: new Date(dataPoint.t).getTime(),
            y: dataPoint.c,
          }));
          
          setChartData(transformedData.length > 0 ? transformedData : fallbackData);
        } catch (error) {
          console.error("Error fetching data:", error);
          setChartData(fallbackData); 
        }
      } else {
        setChartData(fallbackData);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div>
      <StockPageLineChart exampleData={chartData} />
      <p>{searchTerm}</p>
    </div>
  );
};

export default StockPage;
