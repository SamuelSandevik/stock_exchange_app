import React, { useEffect, useState } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import "../scss/_HighChart.scss";

const AAPLStockChart: React.FC = () => {
  const [chartOptions, setChartOptions] = useState<Highcharts.Options>({
    rangeSelector: undefined,
    chart: {
      backgroundColor: "#000", // Ändrar bakgrundsfärgen
    },
    navigator: {
      enabled: false, // Inaktiverar navigatorn
    },
    xAxis: {
      labels: {
        style: {
          color: "#fff", // Ändra till önskad färg
          fontSize: "10px", // Anpassa storleken (valfritt)
          fontWeight: "normal", // Anpassa vikten (valfritt)
        },
      },
      crosshair: {
        dashStyle: "Dot",
        label: {
          enabled: false,
        },
      },
    },

    yAxis: {
      labels: {
        style: {
          color: "#fff", // Ändra till en annan färg för y-axeln
          fontSize: "10px", // Anpassa storleken (valfritt)
          fontWeight: "normal", // Anpassa vikten (valfritt)
        },
      },
    },
    series: [
      {
        name: "AAPL Stock Price",
        data: [], // Initial empty data
        type: "areaspline",
        threshold: null,
        color: "#fc7676",
        lineWidth: 1, // Sätt linjens tjocklek (1 = smal, standard är 2)
        tooltip: {
          pointFormat:
            "<span class='tooltip-date'>{point.x:%a %e %b, %Y}</span> <br/> AAPL {point.y}",
          valueDecimals: 2,
        },
        states: {
          hover: {
            lineWidthPlus: 0, // Ingen förändring av tjockleken vid hover
          },
        },
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [0.25, "rgba(255, 87, 51, 0.5)"], // Färgen vid toppen (100% opacitet)
            [0.125, "rgba(255, 87, 51, 0.5)"], // Halvtransparent färg i mitten
            [1, "rgba(255, 87, 51, 0)"], // Transparent färg läng
          ],
        },
      } as Highcharts.SeriesAreasplineOptions,
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://demo-live-data.highcharts.com/aapl-c.json"
        );
        const data = await response.json();

        // Safely update chartOptions with fetched data
        setChartOptions((prevOptions) => {
          const updatedSeries = prevOptions
            .series?.[0] as Highcharts.SeriesAreasplineOptions;

          return {
            ...prevOptions,
            series: [
              {
                ...updatedSeries,
                data: data,
              },
            ],
          };
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"stockChart"}
      options={chartOptions}
    />
  );
};

export default AAPLStockChart;
