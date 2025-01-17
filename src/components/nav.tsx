import React, { useState } from "react";
import "../styles/nav.scss";
import { useEffect } from "react";

export const MobileNav: React.FC = () => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const ToggleMobileSlider = () => {
    setIsSliderOpen(!isSliderOpen);
  };

  return (
    <section className="mobile-nav">
      <div className="mobile-nav-logo">PR</div>
      <button
        className="mobile-toggle"
        onClick={ToggleMobileSlider}
        aria-expanded={isSliderOpen}
      >
        <i className="bx bx-menu"></i>
      </button>
      {isSliderOpen && <MobileNavSlider onClose={ToggleMobileSlider} />}
    </section>
  );
};

interface MobileNavSliderProps {
  onClose: () => void;
}

export const MobileNavSlider: React.FC<MobileNavSliderProps> = ({
  onClose,
}) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <>
      <div className="mobile-slider open">
        <ul className="mobile-slider-links">
          <li>
            <a href="#summer" onClick={onClose}>
              Schedule
            </a>
          </li>
          <li>
            <a href="#about" onClick={onClose}>
              About Us
            </a>
          </li>
          <li>
            <a href="#activities" onClick={onClose}>
              Activities
            </a>
          </li>
          <li>
            <a href="#gallery-page" onClick={onClose}>
              Gallery
            </a>
          </li>
          <li>
            <a href="#footer" onClick={onClose}>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="overlay" onClick={onClose}></div>
    </>
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
        <figure>PR</figure>
      </div>
      <div className="nav-links">
        <a href="#summer">Schedule</a>
        <a href="#about">About Us</a>
        <a href="#">Activities</a>
        <a href="#gallery-page">Gallery</a>
        <a href="#footer">Contact</a>
      </div>
    </nav>
  );
};
