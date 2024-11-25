import React, { useEffect, useState } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import "./scss/_testChart.scss"


const AAPLNeonChart: React.FC = () => {
    const [chartOptions, setChartOptions] = useState<Highcharts.Options>({
        chart: {
            styledMode: true,
            animation: true,
        },

        exporting: {
            chartOptions: {
                chart: {
                    className: "exported",
                },

            },
        },
        tooltip: {
            split: false,
            distance: 30,
            shadow: false,
        },
        rangeSelector: {

            verticalAlign: "bottom",
            x: 0,
            y: 0,
            buttonSpacing: 40,
            inputEnabled: false,
            dropdown: "never",
            selected: 4,
        },
        navigator: {
            enabled: false,
        },
        title: {
            text: "AAPL",
            y: 50,
        },
        subtitle: {
            text: "",
            align: "left",
            x: 20,
            y: 60,
        },
        plotOptions: {
            series: {
                marker: {
                    enabled: false,
                }
            },
        },
        xAxis: {
            crosshair: {
                // Enable crosshair
                width: 2,            // Width of the crosshair line
                color: '#FF0000',    // Red color
                dashStyle: 'Dash',   // Dashed line style
                zIndex: 10,          // Ensure the crosshair appears on top
                label: {
                    enabled: true,
                    format: '{value}',  // Display the value of the x-axis at the crosshair
                    style: {
                        color: '#FF0000',
                        fontWeight: 'bold',
                    },
                },

            },

            visible: false,
        },
        yAxis: {
            visible: false,
            accessibility: {
                description: "price",
            },
        },

        defs: {
            neon: {
                tagName: "filter",
                id: "neon",
                // Casting the filter elements to any to bypass TypeScript errors
                children: [
                    { tagName: "feDropShadow", dx: 0, dy: 0, stdDeviation: 1, "flood-color": "#ffffff" },
                    { tagName: "feDropShadow", dx: 0, dy: 0, stdDeviation: 2, "flood-color": "#ffffff", "flood-opacity": 0.7 },
                    { tagName: "feDropShadow", dx: 0, dy: 0, stdDeviation: 2, "flood-color": "#f27ce6" },
                    { tagName: "feDropShadow", dx: 0, dy: 0, stdDeviation: 8, "flood-color": "#f27ce6", "flood-opacity": 0.8 },
                ] as any, // Explicitly typing `children` as `any` to avoid TypeScript error
            } as any,
        },
        series: [
            {
                name: "AAPL Stock Price",
                data: [],

                tooltip: {
                    pointFormat: "{point.y}",
                },
                lastVisiblePrice: {
                    enabled: true,
                },
            } as unknown as Highcharts.SeriesOptionsType,
        ],
        responsive: {
            rules: [
                {
                    condition: {
                        maxWidth: 300,
                    },
                    chartOptions: {
                        chart: {
                            className: "small-chart",
                        },
                        title: {
                            align: "left",
                            verticalAlign: "top",
                        },
                        subtitle: {
                            align: "center",
                            verticalAlign: "top",
                        },
                        scrollbar: {
                            enabled: false,
                        },
                        rangeSelector: {
                            buttonSpacing: 20,
                        },
                    },
                },
            ],
        },
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://demo-live-data.highcharts.com/aapl-ohlc.json");
                const data = await response.json();

                setChartOptions((prevOptions) => ({
                    ...prevOptions,
                    subtitle: {
                        ...prevOptions.subtitle,
                        text: `$${data[data.length - 1][1]}`,
                    },
                    series: [
                        {
                            ...(prevOptions.series?.[0] as Highcharts.SeriesOptionsType),
                            data: data,
                        },
                    ],
                }));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <HighchartsReact highcharts={Highcharts} constructorType="stockChart" options={chartOptions} />
        </div>
    );
};

export default AAPLNeonChart;
