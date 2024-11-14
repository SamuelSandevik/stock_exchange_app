import { useEffect, useState } from "react";
import { DailyOpenClose } from "../MockDataForAPI/MockdataInterface";
import { generateMockDailyOpenCloseData } from "../MockDataForAPI/Mockdata";

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

export default DailyOpenCloseComponent;