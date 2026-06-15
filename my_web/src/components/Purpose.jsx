import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Purpose = () => {
  const bridgeItems = [
    'Confusion and clarity',
    'School lessons and true understanding',
    'Potential and achievement',
    'Who a student is today and who they can become tomorrow',
    'Effort and results'
  ];

  return (
    <section className="purpose-section" id="about">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8} data-aos="fade-up">
            <span className="section-tag">Our Purpose</span>
            <h2 className="section-title">Every child has potential.</h2>
          </Col>
        </Row>
        
        <Row className="align-items-start">
          <Col lg={6} className="mb-4 mb-lg-0" data-aos="fade-right">
            <p className="purpose-text">
              Yet many students struggle not because they are incapable, but 
              because there is a gap between what is taught and what is truly 
              understood.
            </p>
            
            <p className="purpose-highlight mb-4">
              At Aura Bridge, we exist to bridge that gap.
            </p>
            
            <p className="purpose-text">
              We believe that when students understand concepts in a way that 
              makes sense to them, confidence grows. When confidence grows, 
              results follow.
            </p>
            
            <p className="mission-statement">
              Our mission is not simply to improve grades. Our mission is to help 
              every student become the best version of themselves.
            </p>
            
            <img 
              src="./students.png"
              alt="Student studying"
              className="purpose-image d-none d-lg-block"
              data-aos="zoom-in"
              data-aos-delay="300"
            />
          </Col>
          
          <Col lg={6} data-aos="fade-left" data-aos-delay="200">
            <div className="story-card">
              <h3>The Story Behind Aura Bridge</h3>
              
              <p>
                The word <span className="highlight-word">"Aura"</span> represents the unique potential, 
                energy and strengths that every child possesses. Every student has an aura. 
                A spark. A talent. A future waiting to be unlocked.
              </p>
              
              <p>
                The word <span className="highlight-word">"Bridge"</span> represents the journey. 
                The connection between:
              </p>
              
              <div className="bridge-items">
                {bridgeItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="bridge-item"
                    data-aos="fade-up"
                    data-aos-delay={100 + (index * 50)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Purpose;
