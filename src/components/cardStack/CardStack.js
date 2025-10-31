import React from "react";
import "./CardStack.css";
import Card from "./Card";
import { cards } from "./CardData";

const CardStack = () => {
return (
    <div className="card-stack">
        {cards.map((card, index) => (
            <div className="card-container" key={index} style={{zIndex: cards.length-index -1 }}>
                <Card
                    title={card.title}
                    description={card.description}
                    videoSrcMP4={card.videoSrcMP4}
                />

            </div>
        ))}
    </div>
);
};

export default CardStack;
