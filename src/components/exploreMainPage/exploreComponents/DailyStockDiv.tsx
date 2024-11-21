import ApexCharts from "apexcharts";
import "../mainpageScss/_mainpagePage.scss";
import  { useEffect, useRef } from "react";
import ParentComponent from "../../CandleStickChart/ParentComponent";



function DailyStockDiv() {
    const chartRef = useRef<HTMLDivElement | null>(null);
    const chartInstance = useRef<ApexCharts | null>(null); // Store chart instance
  
    useEffect(() => {
      const options = {
        chart: {
          type: "area",
        },
        series: [
          {
            name: "sales",
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
          },
        ],
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0.9,
            stops: [0, 100, 100]
          }
        },
      };
  
      if (chartRef.current) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
  
        chartInstance.current = new ApexCharts(chartRef.current, options);
        chartInstance.current.render();
      }
  
      return () => {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
      };
    }, []);
    return (
        
        <div id="dailyShowStock">
            <div id="dailyShowStockName">
               <p> Google (GOOG)</p>
            </div>
            <div id="dailyStockChart" /* ref={chartRef}*/>
                <ParentComponent />
            </div>
        </div>
        
    );

}

export default DailyStockDiv;