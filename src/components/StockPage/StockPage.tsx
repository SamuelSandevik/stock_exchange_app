import { useLocation } from "react-router-dom";
import { exampleData } from "../Homepage/LineChart/exampleData";
import StockPageLineChart from "./components/StockPageLineChart";
import GetStockApi from "../StockSearch/GetStockApi";
import { useEffect, useState } from "react";

const StockPage = () => {
  const location = useLocation();
  const searchTerm = location.state?.searchTerm;
  const [chartData, setChartData] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm) {
        const response = await GetStockApi(searchTerm);
        const transformedData = response.map((dataPoint: any) => ({
          x: new Date(dataPoint.t).getTime(), 
          y: dataPoint.c, 
        }));
        setChartData(transformedData);
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
