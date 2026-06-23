import React from 'react';
import {Container} from 'react-bootstrap';
import { HiSparkles } from 'react-icons/hi';

function ApproachHero() {
  return (
    <section className="ab-approach-hero mt-5">
      <Container>
      <div className="container-fluid px-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6" data-aos="fade-right">
            <span className="ab-badge-pill"><HiSparkles /> Our Approach</span>
            <h2 className="ab-approach-h2">How We Bridge <br/> <span className="ab-orange">the Gap</span></h2>
            <p className="ab-approach-sub">We go beyond teaching. Our proven approach helps students understand better, build confidence, 
              and achieve lasting results.
            </p>
            <p className="ab-tagline">Understand. Apply. Achieve.</p>
          </div>

          <div className="col-lg-6 position-relative" data-aos="fade-left">
            <img
              src="/approach.png"
              alt="Tutor"
              className="ab-approach-img"
            />

            <div className="ab-quote-bubble">
              <strong>A great teacher</strong> explains.<br></br> <strong>A relatable teacher</strong> connects. <br></br><strong>A caring teacher</strong> empowers.
            </div>
          </div>
        </div>
      </div>
      </Container>
    </section>
  );
}

export default ApproachHero;