import React from "react";
import "./CardStack.css";
import Card from "./Card";

const cards = [
    {
        title: "Stay motivated and reach your goals",
        description:
            "Speak Tutor keeps you motivated and accountable to achieve your goals. Learning a language is better with someone by your side.",
        videoSrcMP4:
            "https://speak-web.b-cdn.net/61a88c135006e8345b005efd%2F684f160ec92027ed2eb5253d_Card_motiv-transcode.mp4",
    },
    {
        title: "Talk about anything, anytime, anywhere",
        description:
            "Speak Tutor is your on-the-go conversational partner. Practice speaking on any topic, anytime, no matter how niche.",
        videoSrcMP4:
            "https://speak-web.b-cdn.net/61a88c135006e8345b005efd/65820a653b087bcc26b94dfc_5_Card_ENG-transcode.mp4",
    },
    {
        title: "Build a relationship with your tutor",
        description:
            "Speak Tutor designs a personalized curriculum as unique as you are by getting to know you on a surprisingly deep level.",
        videoSrcMP4:
            "https://speak-web.b-cdn.net/61a88c135006e8345b005efd%2F684f152d745501284eb2d631_Card_tutor-transcode.mp4",
    },
];
const CardStack = () => {
return (
    <div className="main">
        {cards.map((card, index) => (
            <div className="card-container" key={index}>
                <Card
                    title={card.title}
                    description={card.description}
                    videoSrcMP4={card.videoSrcMP4}
                    videoSrcWEBM={undefined}
                    poster={undefined}
                >
                    {card.extras}
                </Card>
            </div>
        ))}
    </div>
);
};

export default CardStack;
