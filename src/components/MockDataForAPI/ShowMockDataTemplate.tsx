import { useEffect, useState } from "react";
import { Aggregates, DailyOpenClose } from "./MockdataInterface";
import { generateMockAggregatesData, generateMockDailyOpenCloseData } from "./Mockdata";



interface DailyOpenCloseComponentProps {
    count: number; // Number of mock entries to generate
}

const DailyOpenCloseComponent: React.FC<DailyOpenCloseComponentProps> = ({ count }) => {
    const [data, setData] = useState<DailyOpenClose[]>([]);

    // Generate mock data when the component mounts
    useEffect(() => {
        const generatedData = generateMockDailyOpenCloseData(count);
        setData(generatedData);
    }, [count]);

    return (
        <div>
            <h2>Daily Open/Close Mock Data</h2>
            {data.map((item, index) => (
                <div key={index} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
                    <h3>Stock: {item.symbol}</h3>
                    <p><strong>Date:</strong> {item.from}</p>
                    <p><strong>Open:</strong> ${item.open}</p>
                    <p><strong>Close:</strong> ${item.close}</p>
                    <p><strong>High:</strong> ${item.high}</p>
                    <p><strong>Low:</strong> ${item.low}</p>
                    <p><strong>After Hours:</strong> ${item.afterHours}</p>
                    <p><strong>Pre Market:</strong> ${item.preMarket}</p>
                    <p><strong>Volume:</strong> {item.volume.toLocaleString()}</p>
                </div>
            ))}
        </div>
    );
};



// Props to configure aggregation generation
interface AggregatesComponentProps {
    stocksTicker: string;
    multiplier: number;
    timespan: string;
    from: string;
    to: string;
    adjusted: boolean;
    sort: "asc" | "desc";
    count: number;
}

const AggregatesComponent: React.FC<AggregatesComponentProps> = ({
    stocksTicker,
    multiplier,
    timespan,
    from,
    to,
    adjusted,
    sort,
    count
}) => {
    const [data, setData] = useState<Aggregates[]>([]);

    // Generate mock aggregates data when component mounts
    useEffect(() => {
        const generatedData = generateMockAggregatesData(stocksTicker, multiplier, timespan, from, to, adjusted, sort, count);
        setData(generatedData);
    }, [stocksTicker, multiplier, timespan, from, to, adjusted, sort, count]);

    return (
        <div>
            <h2>Aggregates Mock Data for {stocksTicker}</h2>
            {data.map((aggregate, index) => (
                <div key={index} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
                    <h3>Stock: {aggregate.ticker}</h3>
                    <p><strong>Status:</strong> {aggregate.status}</p>
                    <p><strong>Results Count:</strong> {aggregate.resultsCount}</p>

                    <h4>Aggregate Results:</h4>
                    {aggregate.results.map((result, idx) => (
                        <div key={idx} style={{ borderBottom: "1px solid #ddd", marginBottom: "8px" }}>
                            <p><strong>Open:</strong> ${result.o}</p>
                            <p><strong>Close:</strong> ${result.c}</p>
                            <p><strong>High:</strong> ${result.h}</p>
                            <p><strong>Low:</strong> ${result.l}</p>
                            <p><strong>Volume:</strong> {result.v.toLocaleString()}</p>
                            <p><strong>VWAP:</strong> ${result.vw}</p>
                            <p><strong>Timestamp:</strong> {new Date(result.t).toLocaleString()}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};