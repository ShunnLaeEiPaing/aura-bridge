import React from 'react';

import ApproachHero from './components/sections/ApproachHero';
import FiveSteps from './components/sections/FiveSteps';
import HowWeTeach from './components/sections/HowWeTeach';
import ResultsAndReviews from './components/sections/ResultsAndReviews';
import HeroSection from './components/sections/HeroSection';
import PromiseBar from './components/sections/PromiseBar';
import QuoteSection from './components/sections/QuoteSection';

function Approach() {
  return (
    <section id="approach">
      <ApproachHero />
      <FiveSteps />
      <HowWeTeach />
      <QuoteSection />
      <ResultsAndReviews />
      <HeroSection />
    </section>
  );
}

export default Approach;