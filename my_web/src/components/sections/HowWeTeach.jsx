import React from 'react';
import {Container} from 'react-bootstrap';

function HowWeTeach() {
  const cards = [
    { icon: 'bi-chat-dots', title: 'Relatable Teaching', desc: 'We break down complex concepts using real-life examples students can connect with.' },
    { icon: 'bi-lightbulb', title: 'Active Learning', desc: 'Students engage, ask questions, discuss, and think — because learning is a two-way street.' },
    { icon: 'bi-clipboard-check', title: 'Exam-Focused Strategies', desc: 'We equip students with smart techniques and strategies to tackle exams with confidence.' },
    { icon: 'bi-heart', title: 'Personalised Guidance', desc: 'Small class sizes mean more attention, timely feedback, and guidance that matters.' },
  ];

  return (
    <section className="ab-teach">
      <Container>
      <div className="container-fluid px-5">
        <h2 className="ab-section-title">How We Teach</h2>
        <div className="ab-title-underline mx-auto mb-5"></div>

        <div className="row g-4 align-items-stretch">
          <div className="col-lg-6">
            <div className="row g-4">
              {cards.map((c, i) => (
                <div key={i} className="col-md-6">
                  <div className="ab-teach-card h-100">
                    <div className="ab-icon-wrap">
                      <i className={`bi ${c.icon}`}></i>
                    </div>
                    <h5>{c.title}</h5>
                    <p>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?w=700&q=80"
              alt="Classroom"
              className="ab-teach-img"
            />
          </div>
        </div>
      </div>
      </Container>
    </section>
  );
}

export default HowWeTeach;