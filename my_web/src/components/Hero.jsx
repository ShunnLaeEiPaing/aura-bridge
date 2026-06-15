import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaUsers, FaBook, FaStar, FaTrophy, FaArrowRight } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

const Hero = () => {
  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} data-aos="fade-right">
            <div className="hero-tag">
              <HiSparkles />
              <span>Our Story</span>
            </div>
            
            <h1 className="hero-title">
              Bridging Potential<br />
              & <span className="highlight">Performance</span>
            </h1>
            
            <p className="hero-description">
              At Aura Bridge, we help students bridge the gap between what schools 
              teach and how they truly understand—building confidence, unlocking 
              potential and achieving results that last.
            </p>
            
            <button className="btn-assessment">
              Book a Free Assessment
              <FaArrowRight className="arrow" />
            </button>
            
            <div className="hero-features">
              <div className="feature-item" data-aos="fade-up" data-aos-delay="100">
                <div className="feature-icon purple">
                  <FaUsers />
                </div>
                <span>Relatable<br />Teachers</span>
              </div>
              
              <div className="feature-item" data-aos="fade-up" data-aos-delay="200">
                <div className="feature-icon blue">
                  <FaBook />
                </div>
                <span>Engaging<br />Lessons</span>
              </div>
              
              <div className="feature-item" data-aos="fade-up" data-aos-delay="300">
                <div className="feature-icon indigo">
                  <FaStar />
                </div>
                <span>Exam<br />Strategies</span>
              </div>
              
              <div className="feature-item" data-aos="fade-up" data-aos-delay="400">
                <div className="feature-icon purple">
                  <FaTrophy />
                </div>
                <span>Lasting<br />Results</span>
              </div>
            </div>
          </Col>
          
          <Col lg={6} className="mt-5 mt-lg-0" data-aos="fade-left" data-aos-delay="200">
            <div className="hero-image-wrapper">
              <img 
                src="./teacher.png"
                alt="Student learning with tutor"
                className="hero-image"
              />
              <div className="trust-badge" data-aos="zoom-in" data-aos-delay="600">
                <div className="trust-icon">
                  <FaStar />
                </div>
                <div className="trust-text">
                  <strong>Trusted by</strong>
                  <span>500+ families</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
