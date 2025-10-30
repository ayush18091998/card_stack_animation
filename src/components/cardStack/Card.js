import React from "react";
import "./Card.css";

const Card = ({ title, description, videoSrcMP4 }) => {
    return (
        <div className="card-item">
            {/*<div className="card-inner">*/}
                {/* LEFT */}
            <div className="card-info">
                    <div className="card-title-container">
                        <h3 className="card-title">{title}</h3>
                    </div>
                    <div className="card-description-container">
                        <p className="card-description">{description}</p>
                    </div>
                </div>

            {/* RIGHT */}
            <div className="card-video-frame">
                    <div className="card-video-container">
                        {videoSrcMP4 ? (
                            <video
                                className="card-video"
                                src={videoSrcMP4}
                                autoPlay
                                muted
                                playsInline
                            />
                        ) : (
                            <div className="card-placeholder" />
                        )}
                    </div>
                </div>
            {/*</div>*/}
        </div>
    );
};

export default Card;
