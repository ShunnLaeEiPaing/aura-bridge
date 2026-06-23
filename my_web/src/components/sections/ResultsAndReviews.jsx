import React from 'react';
import {Container} from 'react-bootstrap';

function ResultsAndReviews() {
  const stats = [
    { value: '90%+', label: 'Students improved by 1 grade or more', color: '#1a1a2e' },
    { value: '95%', label: 'Parent satisfaction rate', color: '#1a1a2e' },
    { value: '500+', label: 'Students empowered and growing', color: '#1a1a2e' },
    { value: 'Consistent', label: 'Improvements in school grades & exam performance', color: '#7c5cbf' },
  ];

  const reviews = [
    { text: 'My child went from struggling in Math to scoring an A! The tutors are patient and truely care about their progress.', author: 'Parent of Sec 2 Student' },
    { text: 'Lessons are easy to understand and fun! I feel more confident in exams now.', author: 'Sec 4 Student' },
  ];

  return (
    <section className="ab-results">
      <Container>
      <div className="container-fluid px-5">
        <div className="row g-5">
          <div className="col-lg-6" data-aos="fade-right">
            <h3 className="ab-section-title-left">Results That Matter</h3>
            <div className="ab-underline-orange mb-4"></div>

            <div className="row g-3">
              {stats.map((s, i) => (
                <div key={i} className="col-6">
                  <div className="ab-results-card">
                    <div className="ab-icon-sm">
                      <i className="bi bi-graph-up"></i>
                    </div>
                    <div className="ab-stat" style={{ color: s.color }}>{s.value}</div>
                    <div className="ab-stat-label">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <h3 className="ab-section-title-left">What Parents & Students Say</h3>
            <div className="ab-underline-purple mb-4"></div>

            <div className="d-flex flex-column gap-3">
              {reviews.map((r, i) => (
                <div key={i} className="ab-review-card">
                  <span className="ab-quote-mark">"</span>
                  <p>{r.text}</p>
                  <div className="ab-stars">★★★★★</div>
                  <div className="ab-reviewer">— {r.author}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </Container>
    </section>
  );
}

export default ResultsAndReviews;