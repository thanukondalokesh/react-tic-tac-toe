import React, { useState } from "react";

function Features() {
  const [showFeatures, setShowFeatures] = useState(true);

  const featuresList = [
    "Reusable Components",
    "useState Hook",
    "Event Handling",
    "Conditional Rendering",
  ];

  return (
    <div style={{ margin: "20px" }}>
      <button onClick={() => setShowFeatures(!showFeatures)}>
        {showFeatures ? "Hide Features" : "Show Features"}
      </button>

      {showFeatures && (
        <ul>
          {featuresList.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Features;
