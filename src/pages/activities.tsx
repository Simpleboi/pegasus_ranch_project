import React from "react";
import "../styles/activity.scss";
import { ActivitiesCard } from "../components/card";

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
    <aside className="activities-container">
      <ActivitiesCard 
      name="Archery"
      image="/assets/images/archery.jpg"
      />
      <ActivitiesCard 
      name="Arts & Crafts"
      image="/assets/images/arts-crafts.jpg"
      />
      <ActivitiesCard 
      name="Nature"
      image="/assets/images/nature-walks.jpg"
      />
      <ActivitiesCard 
      name="Horse Care"
      image="/assets/images/horse-care.jpg"
      />
      <ActivitiesCard 
      name="Nighttime Activities"
      image="/assets/images/nighttime.jpg"
      />
      <ActivitiesCard 
      name="Horseback Riding"
      image="/assets/images/horse-riding.jpg"
      />
    </aside>
  </section>;
};

export default Activities;
