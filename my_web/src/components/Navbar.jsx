import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar as BsNavbar } from 'react-bootstrap';
import { FaBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BsNavbar 
      expand="lg" 
      className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <BsNavbar.Brand href="#" className="navbar-brand-custom">
          <div className="brand-icon">
            <FaBook color="#fff" size={18} />
          </div>
        </BsNavbar.Brand>
        
        <BsNavbar.Toggle aria-controls="navbar-nav" />
        
        <BsNavbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link href="#about" className="nav-link-custom">About Us</Nav.Link>
            <Nav.Link href="#programme" className="nav-link-custom">Programme</Nav.Link>
            <Nav.Link as={Link} to="/approach" className="nav-link-custom">
            Our Approach
            </Nav.Link>
            <Nav.Link href="#book" className="btn-book ms-lg-3 mt-2 mt-lg-0 text-center">Book Now</Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;
