import React from "react";
import "../styles/footer.scss";

export const FooterContact = () => {
  return (
    <div className="footer-contact">
      <h1>Contact Us</h1>
      <ul className="footer-contact-links">
        <li>
          <i className="bx bx-phone">
            <a href="tel:+7136704032">713-670-4032</a>
          </i>
        </li>
        <li>
          <i className="bx bx-home">
            <a href="#">Pegasus Ranch 914 Dyann Drive Wharton, TX 77488</a>
          </i>
        </li>
        <li>
          <i className="bx bx-envelope">
            <a href="mailto:Pegasus_ranch@yahoo.com">Pegasus_ranch@yahoo.com</a>
          </i>
        </li>
      </ul>
    </div>
  );
};

export const FooterSocialLinks = () => {
  return (
    <div className="footer-socials">
      <h1>Join our Community</h1>
      <div className="social-container">
        <a href="https://www.facebook.com/100068308787740/menu/?ref=PROFILE_PLUS_ABOUT_TAB" target="_blank">
          <i className="bx bxl-facebook"></i>
        </a>
        <a href="#">
          <i className="bx bxl-youtube"></i>
        </a>
        <a href="#">
          <i className="bx bxl-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export const FooterNewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Newsletter</h1>
      <p>
        Sign up for our newsletter to stay updated on the latest news and
        events!
      </p>
      <form action="#" method="POST">
        <input
          type="email"
          name="email"
          placeholder="Enter your email..."
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export const FooterQuickLinks = () => {
  return (
    <div className="quick-links">
      <h1>Quick links</h1>
      <div className="ql-container">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#gallery">Gallery</a>
        <a href="#schedule">Schedule</a>
        <a href="#activities">Activities</a>
      </div>
    </div>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="footer" id="footer">
      <FooterContact />
      <FooterSocialLinks />
      <FooterNewsLetter />
      <FooterQuickLinks />
      <p className="footer-end">
        2024 Pegasus Ranch Camp Copyright <i className="bx bx-copyright"></i> |
        All Rights Reserved
      </p>
    </footer>
  );
};
