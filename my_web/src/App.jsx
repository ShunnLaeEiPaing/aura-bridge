import React, { useEffect } from 'react';
import AOS from 'aos';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Purpose from './components/Purpose';
import Beliefs from './components/Beliefs';
import MissionVision from './components/MissionVision';
import HeroSection from './components/sections/HeroSection';
import DarkBanner from './components/sections/DarkBanner';
import PromiseBar from './components/sections/PromiseBar';
import QuoteSection from './components/sections/QuoteSection';
import HowWeTeach from './components/sections/HowWeTeach';
import ResultsAndReviews from './components/sections/ResultsAndReviews';
import ApproachHero from './components/sections/ApproachHero';
import FiveSteps from './components/sections/FiveSteps';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Purpose />
      <Beliefs />
    <ApproachHero />
      <FiveSteps />
      <HowWeTeach />
      <ResultsAndReviews />
        <HeroSection />
      <DarkBanner />
      <PromiseBar />
            <QuoteSection />
<MissionVision />
    </div>
  );
}

export default App;
