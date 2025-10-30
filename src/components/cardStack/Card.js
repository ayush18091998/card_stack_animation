import React from "react";
import "./Card.css";

const Card = ({ title, description, videoSrcMP4 }) => {
    return (
        <div className="card-item">
            <div className="card-inner">
                {/* LEFT */}
                <div className="card-left">
                    <div className="card-left-content">
                        <h3 className="card-title">{title}</h3>
                        <p className="card-description">{description}</p>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="card-right">
                    <div className="card-right-content">
                        {videoSrcMP4 ? (
                            <video
                                className="card-video"
                                src={videoSrcMP4}
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                        ) : (
                            <div className="card-placeholder" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
