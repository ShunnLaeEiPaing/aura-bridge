import React from 'react';
import { Container } from 'react-bootstrap';

function FiveSteps() {
  const steps = [
    { num: 1, color: '#7c5cbf', bg: '#ede9f8', icon: 'bi-search', title: 'Diagnose', desc: 'We identify learning gaps through assessments and conversations.' },
    { num: 2, color: '#f59e0b', bg: '#fef3c7', icon: 'bi-bullseye', title: 'Personalise', desc: 'We create a personalized learning plan tailored to each student\'s needs.' },
    { num: 3, color: '#10b981', bg: '#d1fae5', icon: 'bi-people', title: 'Teach & Connect', desc: 'We teach concepts in relatable ways that make sense and stick.' },
    { num: 4, color: '#a855f7', bg: '#f3e8ff', icon: 'bi-graph-up-arrow', title: 'Practise & Apply', desc: 'We reinforce learning with targeted practice and real-world applications.' },
    { num: 5, color: '#ec4899', bg: '#fce7f3', icon: 'bi-trophy', title: 'Review & Grow', desc: 'We track progress, celebrate improvements, and keep raising the bar.' },
  ];

  return (
    <section className="ab-steps">
      <Container>
        <div className="container">
          <h2 className="ab-section-title mb-3" data-aos="fade-up">Our Proven 5-Step Approach</h2>
          <div className="ab-title-underline mx-auto mb-5"></div>
          <div className="d-flex flex-wrap justify-content-between gap-3">
            {steps.map((s, i) => (
              <div key={i} className="ab-step-col text-center" data-aos="fade-up" data-aos-delay={80 * i}>
                <div className="ab-step-num" style={{ background: s.color }}>{s.num}</div>
                <div className="ab-step-icon" style={{ background: s.bg }}>
                  <i className={`bi ${s.icon}`}></i>
                </div>
                <h6 className="ab-step-title">{s.title}</h6>
                <p className="ab-step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FiveSteps;