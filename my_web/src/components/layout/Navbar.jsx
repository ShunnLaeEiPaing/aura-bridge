import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ab-navbar sticky-top">
      <div className="container-fluid px-4">
        <a className="navbar-brand" href="#">
          <div className="ab-logo">
            <span>AURA<br/>BRIDGE</span>
          </div>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navMenu">
          <ul className="navbar-nav align-items-center gap-2">
            <li className="nav-item"><a className="nav-link ab-navlink" href="#">About Us</a></li>
            <li className="nav-item"><a className="nav-link ab-navlink" href="#">Programme</a></li>
            <li className="nav-item"><a className="nav-link ab-navlink" href="#">Our Approach</a></li>
            <li className="nav-item"><a className="nav-link ab-btn-book" href="#">Book Now</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}