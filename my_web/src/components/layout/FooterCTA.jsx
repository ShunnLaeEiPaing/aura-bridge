import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Button } from "react-bootstrap";
import "./footer.css";
import { FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="cta-dark-box mt-5">
        <p className="cta-mini">START THE JOURNEY</p>
        <h2>
          Don't Just Study.
          <br />
          <span>Study Smart.</span>
        </h2>
        <p className="cta-subtext">
          Join students who have transformed their academic journey. Enrol today.
        </p>
        <Button className="cta-yellow-btn" href="#enquire">
          ENROL NOW <BsArrowRight />
        </Button>
        <div className="social-icons mt-5">
          <FaInstagram />
          <FaTiktok />
        </div>
        <div className="footer-main footer-col">
          <p>Email: aurabridge@email.com</p>
          <p>Phone: +65 1234 5678</p>
          <p>Address: Singapore</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Aura Bridge. All rights reserved.</p>
        <p>Designed & Developed by ShunnLaeEiPaing</p>
      </div>
    </footer>
  );
}

export default Footer;