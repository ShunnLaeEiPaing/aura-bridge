import {Container} from 'react-bootstrap';

export default function QuoteSection() {
  return (
    <section className="ab-quote">
      <Container>
      <div className="container text-center">
        <blockquote className="ab-blockquote">
          "Because every student deserves someone who believes in them before they believe in themselves."
        </blockquote>
        <p className="ab-quote-body mt-3">
          And every student deserves a bridge between where they are today and where they dream of being tomorrow.
        </p>
      </div>
      </Container>
    </section>
  );
}