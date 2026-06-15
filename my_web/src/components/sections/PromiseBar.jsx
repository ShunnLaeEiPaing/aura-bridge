import React from 'react';
import {Container} from 'react-bootstrap';

function PromiseBar() {
  const tags = [
    { icon: 'bi-book', text: "We don't just teach." },
    { icon: 'bi-link-45deg', text: 'We connect.' },
    { icon: 'bi-compass', text: 'We guide.' },
    { icon: 'bi-stars', text: 'We inspire.' },
    { icon: 'bi-bridge', text: 'We bridge.' },
  ];

  return (
    <section className="ab-promise">
      <Container>
      <div className="container-fluid px-5">
        <div className="row align-items-center flex-wrap gap-3">
          <div className="col-auto">
            <p className="ab-promise-label mb-0">THE AURA BRIDGE</p>
            <h3 className="ab-promise-title mb-0">Promise</h3>
          </div>

          <div className="col">
            <div className="ab-promise-tags">
              {tags.map((t, i) => (
                <span key={i} className="ab-promise-tag">
                  <i className={`bi ${t.icon} me-1`}></i>
                  {t.text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      </Container>
    </section>
  );
}

export default PromiseBar;