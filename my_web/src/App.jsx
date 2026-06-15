import React, { useEffect } from 'react';
import AOS from 'aos';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Purpose from './components/Purpose';
import Beliefs from './components/Beliefs';
import MissionVision from './components/MissionVision';
import { Routes, Route } from 'react-router-dom';
import Approach from './Approach';
import About from './About';

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

      <Routes>
        <Route
          path="/"
          element={
            <>
              <About/>
            </>
          }
        />

        <Route path="/approach" element={<Approach />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
