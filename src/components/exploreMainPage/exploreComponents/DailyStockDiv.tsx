import ApexCharts from "apexcharts";
import "../exploreScss/_explorePage.scss";
import  { useEffect, useRef } from "react";



function DailyStockDiv() {
    const chartRef = useRef<HTMLDivElement | null>(null);
    const chartInstance = useRef<ApexCharts | null>(null); // Store chart instance
  
    useEffect(() => {
      const options = {
        chart: {
          type: "line",
        },
        series: [
          {
            name: "sales",
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
          },
        ],
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
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
            <div id="dailyStockChart"  ref={chartRef}>
                
            </div>
        </div>
        
    );

}

export default DailyStockDiv;