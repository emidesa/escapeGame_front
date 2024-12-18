import React from "react";
import "../ChallengeBadge.css";

const ChallengeBadge = ({ stars, duration }) => {
  return (
    <div className="challenge-badge">
      <div className="challenge-content">
        <h3>Difficulté :</h3>
        <div className="stars">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < stars ? "star-filled" : "star-empty"}>
              ★
            </span>
          ))}
        </div>
      </div>
      <div className="duration-circle">{duration}</div>
    </div>
  );
};

export default ChallengeBadge;