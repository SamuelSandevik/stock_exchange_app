import React from "react";
import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import "./scss/_homepage.scss";

interface ChartProps {
  data: { x: number; y: number }[];
  ticker: string;
  percentage: string;
  closePrice: string;
  changePrice: string;
}

const Chart: React.FC<ChartProps> = ({
  data,
  ticker,
  percentage,
  closePrice,
  changePrice,
}) => {
  const options: ApexOptions = {
    chart: {
      type: "line",
      toolbar: { show: false },
      zoom: { enabled: false },
      animations: { enabled: true },
    },
    stroke: {
      colors: ["#fff"], // Svart linje
      width: 2,
    },
    yaxis: {
      show: false, // Dölj y-axeln
      labels: { show: false }, // Dölj y-axelns etiketter
      axisTicks: { show: false }, // Dölj tickmarks
    },
    xaxis: {
      type: "datetime",
      labels: { show: false }, // Dölj x-axelns etiketter
      axisBorder: { show: false }, // Dölj x-axelns gräns
      axisTicks: { show: false }, // Dölj tickmarks på x-axeln
    },
    grid: {
      show: false, // Dölj bakgrundslinjer
    },
    tooltip: { enabled: false }, // Inaktivera tooltip om du inte vill ha den
  };

  const series = [
    {
      name: "Stock Data",
      data: data,
    },
  ];

  const percentageValue = parseFloat(percentage);
  const percentageClass =
    percentageValue > 0
      ? "percent positive"
      : percentageValue < 0
        ? "percent negative"
        : "percent neutral";

  return (
    <div className="chart-box">
      <div className="ticker">{ticker}</div>
      <div className="chart-container">
        <ReactApexChart
          options={options}
          series={series}
          type="line"
          height="100%"
        />
      </div>
      <div className="price-procentage-container">
        <p className="close-price">${closePrice}</p>
        <div className={`${percentageClass} price-change-container`}>
          <p className="price-change">{parseFloat(changePrice).toFixed(2)}</p>
          <p className="price-change">({percentage})</p>
        </div>
      </div>
    </div>
  );
};

export default Chart;
