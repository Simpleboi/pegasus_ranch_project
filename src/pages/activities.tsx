import React from "react";
import "../styles/activity.scss";

export const ActBanner: React.FC = () => {
  return (
    <div className="act-banner-container">
      <h1>Acitvities</h1>
      <p>
        At Pegasus Ranch, we offer a diverse range of activites designed to provide an unforgettable experience for all our campers. Whether you're seeking adventure, creativity, or relaxation, our carfully curated activites ensure there's something for everyone to enjoy!
      </p>
    </div>
  );
};

const Activities: React.FC = () => {
  return <section id="activity-page">
    <ActBanner />
  </section>;
};

export default Activities;
