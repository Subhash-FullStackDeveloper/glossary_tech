import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import ThemeToggle from './components/ThemeToggle';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import MissionVision from './pages/MissionVision';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Clients from './pages/Clients';
import Careers from './pages/Careers';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollProgress />
        <ThemeToggle />
        <Navigation />

        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/mission-vision" element={<MissionVision />} />
              <Route path="/services/*" element={<Services />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/careers/*" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
