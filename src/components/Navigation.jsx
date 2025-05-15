import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-700 hover:text-blue-600 transition duration-300"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    className="block text-gray-700 hover:text-blue-600 transition duration-300 px-4"
    onClick={onClick}
  >
    {children}
  </Link>
);

const Navigation = ({ isMobileMenuOpen, toggleMobileMenu }) => {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            YourBrand
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="py-4 space-y-4">
                <MobileNavLink to="/" onClick={toggleMobileMenu}>Home</MobileNavLink>
                <MobileNavLink to="/about" onClick={toggleMobileMenu}>About</MobileNavLink>
                <MobileNavLink to="/services" onClick={toggleMobileMenu}>Services</MobileNavLink>
                <MobileNavLink to="/contact" onClick={toggleMobileMenu}>Contact</MobileNavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation; 