import { useState } from "react";
import GetStockApi from "../StockSearch/GetStockApi";
import FormatStock, { CandlestickData } from "./FormatCandleStick";
import StockSearch from "../StockSearch/StockSearch";
import ApexChart from "./CandleStickChart";
import { ApexOptions } from "apexcharts";

const ParentComponent: React.FC = () => {
  const [formattedData, setFormattedData] = useState<CandlestickData[]>([]);


  const [chartOptions, setChartOptions] = useState<ApexOptions>({
    chart: {
      type: "candlestick",
      height: 350,
      toolbar: {
        show: false,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: false,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          customIcons: []
        },
       
        autoSelected: 'zoom' 
      },
      animations: {
        enabled: true,
        speed: 800,
        animateGradually: {
            enabled: true,
            delay: 150
        },
        dynamicAnimation: {
            enabled: true,
            speed: 350
        }
    }
    },
    title: {
      text: "Stock Data", 
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  });

  const handleSearch = async (searchTerm: string) => {
    const result = await GetStockApi(searchTerm);
    if (result && Array.isArray(result)) {
      const formatted = FormatStock(result);
      setFormattedData(formatted);

      setChartOptions((prevOptions) => ({
        ...prevOptions,
        title: {
          ...prevOptions.title,
          text: `${searchTerm} Stock Data`, 
        },
      }));
    }
  };
  return (
    <div>
      <StockSearch onSearch={handleSearch} />
      <ApexChart data={formattedData} options={chartOptions}/>
    </div>
  );
};

export default ParentComponent;
