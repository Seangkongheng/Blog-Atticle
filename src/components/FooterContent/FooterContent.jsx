import React from "react";
import "../FooterContent/FooterContent.css";

const FooterContent = () => {
  return (
    <div className="footer-content-container">
      <div className="footer-content-item">
        <div className="footer-cotent-branch">
          <h1>SAILEY</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
            ipsum, nisi velit harum facere beatae saepe. Laboriosam, earum
            corporis. Adipisci accusamus et repellat animi iure numquam
            molestiae odio voluptate assumenda?
          </p>
        </div>
        <div className="footer-cotent-navigation">
          <p>Navigation</p>
          <ul>
            <li>Home</li>
            <li>Pages</li>
            <li>About Us</li>
            <li>Service</li>
          </ul>
        </div>
        <div className="footer-cotent-quick-link">
          <p>Quick Link</p>
          <ul>
            <li>Contact Us</li>
            <li>FAQs</li>
            <li>Booking</li>
            <li>Pages</li>
          </ul>
        </div>
        <div className="footer-cotent-service">
          <p>Services</p>
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>404</li>
          </ul>
        </div>
      </div>
      <div className="footer-button">
        <div className="footer-button-content">
          <p><i class="fa-solid fa-location-dot"></i> &nbsp; London Eye, London UK</p>
        </div>
        <div className="footer-button-content">
          <p><i class="fa-solid fa-phone"></i>&nbsp; 096-990-72-15</p>
        </div>
        <div className="footer-button-content">
          <p><i class="fa-solid fa-envelope"></i>&nbsp;konghengseang878@gmail.com</p>
        </div>
        <div className="footer-button-content">
          <div className="navbar-icon-socail">
            <div className="navbar-icon-socail-content">
              <i class="fa-brands fa-youtube"></i>
            </div>
            <div className="navbar-icon-socail-content">
              <i class="fa-brands fa-facebook"></i>
            </div>
            <div className="navbar-icon-socail-content">
              <i class="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copy-right">
            <p>@2024 seangkongheng . All Rights Reserve</p>
      </div>
    </div>
  );
};

export default FooterContent;
