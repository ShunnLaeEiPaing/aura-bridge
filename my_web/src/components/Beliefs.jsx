import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaHeart, FaGlobe, FaHandshake, FaShieldAlt, FaRocket } from 'react-icons/fa';
import '../css/belief.css';

const Beliefs = () => {
  const beliefs = [
    {
      icon: <FaHeart />,
      color: 'pink',
      title: 'Every Child Can Improve',
      description: 'Students are not born "good" or "bad" at a subject. With the right guidance, mindset and support, every student can grow.'
    },
    {
      icon: <FaGlobe />,
      color: 'purple',
      title: 'Understanding Matters More Than Memorising',
      description: 'Many students memorise. Few truly understand. We focus on helping students understand concepts deeply so they can apply them confidently.'
    },
    {
      icon: <FaHandshake />,
      color: 'blue',
      title: 'Relationships Come Before Results',
      description: 'Students learn best from teachers they trust. That is why we build meaningful relationships with our students through mentorship, encouragement and genuine care.'
    },
    {
      icon: <FaShieldAlt />,
      color: 'yellow',
      title: 'Confidence Changes Everything',
      description: 'A confident student participates more. Tries harder. Recovers faster from mistakes. And ultimately performs better.'
    },
    {
      icon: <FaRocket />,
      color: 'green',
      title: 'We Build Confident Learners',
      description: 'Our goal is not only to improve grades. Our goal is to build confident learners prepared for life, not just exams.'
    }
  ];

  return (
    <section className="beliefs-section" id="approach">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col lg={8} data-aos="fade-up">
            <span className="section-tag">Our Beliefs</span>
            <h2 className="section-title">What guides everything we do</h2>
          </Col>
        </Row>
        
        <Row>
          {beliefs.slice(0, 3).map((belief, index) => (
            <Col lg={4} md={6} className="mb-4" key={index}>
              <div 
                className="belief-card" 
                data-aos="fade-up" 
                data-aos-delay={100 * index}
              >
                <div className={`belief-icon ${belief.color}`}>
                  {belief.icon}
                </div>
                <h4>{belief.title}</h4>
                <p>{belief.description}</p>
              </div>
            </Col>
          ))}
        </Row>
        
        <Row className="justify-content-center">
          {beliefs.slice(3, 5).map((belief, index) => (
            <Col lg={4} md={6} className="mb-4" key={index + 3}>
              <div 
                className="belief-card" 
                data-aos="fade-up" 
                data-aos-delay={100 * (index + 3)}
              >
                <div className={`belief-icon ${belief.color}`}>
                  {belief.icon}
                </div>
                <h4>{belief.title}</h4>
                <p>{belief.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Beliefs;
