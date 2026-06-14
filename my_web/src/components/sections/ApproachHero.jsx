import React from 'react';
import {Container} from 'react-bootstrap';

function ApproachHero() {
  return (
    <section className="ab-approach-hero">
      <Container>
      <div className="container-fluid px-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span className="ab-badge-pill">Our Approach</span>
            <h2 className="ab-approach-h2">How We Bridge <span className="ab-orange">the Gap</span></h2>
            <p className="ab-approach-sub">We go beyond teaching...</p>
            <p className="ab-tagline">Understand. Apply. Achieve.</p>
          </div>

          <div className="col-lg-6 position-relative">
            <img
              src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=700&q=80"
              alt="Tutor"
              className="ab-approach-img"
            />

            <div className="ab-quote-bubble">
              <strong>A great teacher</strong> explains. <strong>A relatable teacher</strong> connects. <strong>A caring teacher</strong> empowers.
            </div>
          </div>
        </div>
      </div>
      </Container>
    </section>
  );
}

export default ApproachHero;