import React from "react";
import "../scss/_news.scss";


interface NewsArticle {
    title: string;
    body: string;
    date: string; // New date field (ISO format string for simplicity)
}

// Sample news articles with dates
const stockNews: NewsArticle[] = [
    {
        title: "Tesla's Expansion Into New Markets Promises Robust Growth",
        body: "Tesla is making significant strides in expanding its market reach, with new plans to enter Asia and South America. This expansion is expected to drive long-term growth for the electric car manufacturer, who continues to dominate the EV sector globally. Analysts remain optimistic about Tesla's prospects for 2024.",
        date: "2024-11-19T08:00:00Z"
    },
    {
        title: "Apple's Latest iPhone Launch Sets New Records",
        body: "Apple’s recent iPhone 15 launch has broken sales records, with customers flocking to stores worldwide. The new features, including an advanced camera system and upgraded performance, are receiving positive feedback. Industry experts predict this launch will strengthen Apple’s position as the leading smartphone brand for the next year.",
        date: "2024-11-18T14:30:00Z"
    },
    {
        title: "Amazon Reports Impressive Holiday Season Performance",
        body: "Amazon has reported stronger-than-expected sales during the holiday season, marking a significant recovery from earlier struggles. The increase in consumer spending, coupled with enhancements to its logistics and delivery network, has positioned Amazon well for continued dominance in the e-commerce space through the first quarter of 2024.",
        date: "2024-11-17T10:00:00Z"
    },
    {
        title: "Microsoft's Cloud Services Continue to Drive Revenue Growth",
        body: "Microsoft's cloud computing division has seen explosive growth, contributing to a solid quarterly earnings report. Azure’s increasing adoption by enterprises has helped Microsoft maintain its leadership in cloud infrastructure. With the tech giant continuing to innovate, its market share in cloud services is expected to grow in the coming months.",
        date: "2024-11-16T15:45:00Z"
    },
    {
        title: "Netflix Expands Content Library, Eyes Global Growth",
        body: "Netflix is doubling down on global content, investing heavily in original programming across various languages. The company aims to cater to a broader audience and increase international subscriber growth. With new series and movies receiving critical acclaim, Netflix remains a dominant force in the streaming industry as 2024 unfolds.",
        date: "2024-11-15T12:00:00Z"
    },
    {
        title: "Meta Enhances Virtual Reality Experiences for Users",
        body: "Meta is pushing the boundaries of virtual reality with its new Horizon Worlds updates. The tech giant aims to create a more immersive social VR experience for users, improving engagement in its metaverse platform. As Meta continues its pivot toward immersive digital experiences, investors are hopeful about the company's future growth.",
        date: "2024-11-14T09:15:00Z"
    }
];
const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString(); // Returns a human-readable date string (e.g., "11/19/2024, 8:00:00 AM")
};
const StockNews: React.FC = () => {
    return (
        <div className="news">
            <img src="../../../../public/blackflowers.jpg" className="news-background-image" alt="News background image" />
            <h1 className="title">Latest Stock News</h1>
            <div className="newsSuperContainer">
                {stockNews.map((article, index) => (
                    <div>
                        <div key={index} className="newsContainer" style={{ marginBottom: "20px" }}>
                            <h2 className="newsTitle">{article.title}</h2>
                            <p className="newsBody">{article.body}</p>
                            <p className="date"><strong>Published on:</strong> {formatDate(article.date)}</p>
                            <div className="line"></div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default StockNews;