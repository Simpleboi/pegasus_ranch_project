import React from "react";
import "../styles/nav.scss";
import Dropdown from "react-bootstrap/Dropdown";
import { useEffect, useState } from "react";

export const MobileNav: React.FC = () => {
  return (
    <Dropdown id="dropdown-container">
      <Dropdown.Toggle variant="success" id="dropdown-basic" className="toggle">
        Links
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" id="dropdown-item">
          Schedule
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2">About Us</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Activitites</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Gallery</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Contact</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export const Nav: React.FC = () => {
  const [isMobileView, setIsMobileView] = useState<boolean>(
    window.innerWidth < 678
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 678);
    };

    // Add event listener on mount
    window.addEventListener("resize", handleResize);

    // Check on initial render
    handleResize();

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav>
      {isMobileView ? <MobileNav /> : <></>}
      <div className="nav-logo">
        <figure></figure>
      </div>
      <div className="nav-links">
        <a href="#">Schedule</a>
        <a href="#about">About Us</a>
        <a href="#">Activities</a>
        <a href="#gallery-page">Gallery</a>
        <a href="#footer">Contact</a>
      </div>
    </nav>
  );
};
