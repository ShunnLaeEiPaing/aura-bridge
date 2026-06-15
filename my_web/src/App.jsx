import { useState } from 'react'
import HeroSection from './components/sections/HeroSection';
import DarkBanner from './components/sections/DarkBanner';
import PromiseBar from './components/sections/PromiseBar';
import QuoteSection from './components/sections/QuoteSection';
import HowWeTeach from './components/sections/HowWeTeach';
import ResultsAndReviews from './components/sections/ResultsAndReviews';
import ApproachHero from './components/sections/ApproachHero';
import FiveSteps from './components/sections/FiveSteps';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ApproachHero />
      <FiveSteps />
      <HowWeTeach />
      <ResultsAndReviews />
        <HeroSection />
      <DarkBanner />
      <PromiseBar />
            <QuoteSection />

    </>
  )
}

export default App
