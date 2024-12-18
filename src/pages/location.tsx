import React, { useState, useEffect } from "react";
import "../styles/location.scss";

export const Location: React.FC = () => {
  return (
    <section className="location">
      <h1 className="location-header">Our Location</h1>
      <div className="location-map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3479.6696890398007!2d-96.06143672396553!3d29.292025353826478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86410aafdc28761f%3A0xde21a1915a02bc47!2s914%20Dyann%20St%2C%20Wharton%2C%20TX%2077488!5e0!3m2!1sen!2sus!4v1733991092389!5m2!1sen!2sus"
          style={{
            border: "none",
            boxShadow: "2px 4px 12px rgba(0, 0, 0, 0.2);",
            borderRadius: "7px",
            margin: "15px",
            width: "95%",
            height: "400px"
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="location-service"
        ></iframe>
      </div>
    </section>
  );
};
