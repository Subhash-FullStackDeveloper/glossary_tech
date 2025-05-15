import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner';
import ScrollProgress from './components/ScrollProgress';
import ThemeToggle from './components/ThemeToggle';
import PageTransition from './components/PageTransition';

// Context
import { ToastProvider } from './context/ToastContext';

// Pages
import Home from './assets/components/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

// AnimatePresence wrapper component
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          } 
        />
        <Route 
          path="/about" 
          element={
            <PageTransition>
              <About />
            </PageTransition>
          } 
        />
        <Route 
          path="/services" 
          element={
            <PageTransition>
              <Services />
            </PageTransition>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          } 
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <Router>
      <ToastProvider>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <ScrollProgress />
          <ThemeToggle />
          
          <Navigation 
            isMobileMenuOpen={isMobileMenuOpen} 
            toggleMobileMenu={toggleMobileMenu} 
          />

          {/* Main Content */}
          <main className="flex-grow pt-16">
            <AnimatedRoutes />
          </main>

          <Footer />
        </div>
      </ToastProvider>
    </Router>
  );
};

export default App;
