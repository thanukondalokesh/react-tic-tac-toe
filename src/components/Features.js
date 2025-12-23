import React, { useState } from "react";
import "../App.css"; // make sure this is imported

function Features() {
  const [showFeatures, setShowFeatures] = useState(true);

  const featuresList = [
    "Reusable Components",
    "useState Hook",
    "Event Handling",
    "Conditional Rendering",
  ];

  return (
    <div className="features-container">
      <button
        className="toggle-btn"
        onClick={() => setShowFeatures(!showFeatures)}
      >
        {showFeatures ? "Hide React Features" : "Show React Features"}
      </button>

      {showFeatures && (
        <ul className="feature-list">
          {featuresList.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Features;
