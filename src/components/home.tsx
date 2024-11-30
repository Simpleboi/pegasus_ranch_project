import React from "react";
import "../styles/home.scss";

export const Banner: React.FC = () => {
  return (
    <section id="banner" className="banner">
      <div className="banner-container">
        <h1>
          Experience <br />
          Pegasus Ranch
        </h1>
        <p>
          Join us for a variety of activities, including horseback riding
          lessons, scenic trail rides, and interactive horse care workshops. Our
          beautiful ranch is the perfect place to connect with nature, bond with
          friends and family, and discover the joy of riding!
        </p>
      </div>
    </section>
  );
};

export const BannerButtons: React.FC = () => {
  return (
    <section className="buttons-container">
      <div className="inner-container">
        <button id="learn-more">Learn More</button>
        <button id="contact-us">Contact Us</button>
      </div>
    </section>
  );
};
