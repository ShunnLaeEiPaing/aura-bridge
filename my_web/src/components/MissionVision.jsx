import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  FaBullseye, FaEye, FaBook, FaHeart, FaSeedling, FaUsers, FaGem 
} from 'react-icons/fa';

const MissionVision = () => {
  const values = [
    {
      icon: <FaBook />,
      color: 'blue',
      title: 'Understanding Before Results',
      description: 'We teach for understanding, not memorisation.'
    },
    {
      icon: <FaHeart />,
      color: 'green',
      title: 'Relatable Teaching',
      description: 'We explain concepts in ways students connect with.'
    },
    {
      icon: <FaSeedling />,
      color: 'yellow',
      title: 'Growth Mindset',
      description: 'We celebrate progress, not perfection.'
    },
    {
      icon: <FaUsers />,
      color: 'purple',
      title: 'Mentorship',
      description: 'We guide students beyond academics.'
    },
    {
      icon: <FaGem />,
      color: 'pink',
      title: 'Care',
      description: 'We care about the child, not just the grades.'
    }
  ];

  return (
    <section className="mission-section">
      <Container>
        <Row className="mb-4">
          <Col lg={6} className="mb-4" data-aos="fade-right">
            <div className="mission-card">
              <div className="mission-icon blue">
                <FaBullseye />
              </div>
              <h4>Our Mission</h4>
              <p>
                To bridge the gap between what schools teach and how students 
                actually learn.
              </p>
            </div>
          </Col>
          
          <Col lg={6} className="mb-4" data-aos="fade-left">
            <div className="mission-card vision-card">
              <div className="mission-icon green">
                <FaEye />
              </div>
              <h4>Our Vision</h4>
              <p>
                To become Singapore's most relatable and student-centred learning 
                community, where every child feels understood, supported and 
                empowered to achieve their fullest potential.
              </p>
            </div>
          </Col>
        </Row>
        
        <Row>
          <Col lg={12} data-aos="fade-up">
            <div className="values-card">
              <h4>Our Values</h4>
              <Row>
                {values.map((value, index) => (
                  <Col lg={4} md={6} key={index}>
                    <div 
                      className="value-item"
                      data-aos="fade-up"
                      data-aos-delay={80 * index}
                    >
                      <div className={`value-icon ${value.color}`}>
                        {value.icon}
                      </div>
                      <div className="value-content">
                        <h5>{value.title}</h5>
                        <p>{value.description}</p>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MissionVision;
