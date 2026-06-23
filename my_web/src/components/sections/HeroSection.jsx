import React from 'react';
import {Container} from 'react-bootstrap';

function HeroSection() {
  return (
    <section className="ab-hero" data-aos="fade-up">
      <Container>
      <div className="container text-center">
        <h1>Let's Bridge the Gap. <span className="ab-purple">Together.</span></h1>
        <p className="ab-hero-sub">We're here to support your child's journey every step of the way.</p>
        <button className="ab-btn-assess mt-3">Book a Free Assessment &nbsp;→</button>
      </div>
      </Container>
    </section>
  );
}

export default HeroSection;