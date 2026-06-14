import React from 'react';
import {Container} from 'react-bootstrap';

function DarkBanner() {
  return (
    <section className="ab-dark-banner">
      <Container>
      <div className="container-fluid px-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <p className="ab-sub">Every step we take together</p>
            <h2 className="ab-banner-h2">builds a better tomorrow.</h2>
          </div>

          <div className="col-lg-6 text-lg-end">
            <p className="ab-right-text">Discover how we can help your child bridge the gap and achieve their best.</p>
            <button className="ab-btn-assess-dark">Book a Free Assessment &nbsp;→</button>
          </div>
        </div>
      </div>
      </Container>
    </section>
  );
}

export default DarkBanner;