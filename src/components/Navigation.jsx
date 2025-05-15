import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const menuItems = [
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'About',
      path: '/about'
    },
    {
      title: 'Services',
      path: '/services',
      submenu: [
        { title: 'BPO Services', path: '/services/bpo' },
        { title: 'Software Development', path: '/services/software' },
        { title: 'Training & Placements', path: '/services/training' },
        { title: 'Software Testing', path: '/services/testing' },
        { title: 'Internships', path: '/services/internships' },
        { title: 'Staffing & Solutions', path: '/services/staffing' }
      ]
    },
    {
      title: 'Clients',
      path: '/clients'
    },
    {
      title: 'Careers',
      path: '/careers'
    },
    {
      title: 'Contact',
      path: '/contact'
    }
  ];

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/logo.svg"
              alt="Glossary Softtech"
              className="h-12"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.submenu ? (
                  <button
                    className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium"
                    onClick={() => toggleDropdown(index)}
                  >
                    <span>{item.title}</span>
                    <FaChevronDown className="h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-gray-700 hover:text-blue-600 font-medium ${
                      location.pathname === item.path ? 'text-blue-600' : ''
                    }`}
                  >
                    {item.title}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.submenu && (
                  <AnimatePresence>
                    {activeDropdown === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2"
                      >
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-600"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="py-4">
                {menuItems.map((item, index) => (
                  <div key={index}>
                    {item.submenu ? (
                      <div>
                        <button
                          className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          onClick={() => toggleDropdown(index)}
                        >
                          <span>{item.title}</span>
                          <FaChevronDown
                            className={`h-4 w-4 transform transition-transform ${
                              activeDropdown === index ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="bg-gray-50"
                            >
                              {item.submenu.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={subItem.path}
                                  className="block px-8 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                >
                                  {subItem.title}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className={`block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${
                          location.pathname === item.path ? 'text-blue-600' : ''
                        }`}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation; 