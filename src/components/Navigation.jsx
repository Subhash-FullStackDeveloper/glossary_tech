import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      title: 'About Us',
      submenu: [
        { title: 'About Us', path: '/about' },
        { title: 'Mission, Vision & Values', path: '/mission-vision' }
      ]
    },
    {
      title: 'Services',
      submenu: [
        {
          title: 'BPO Services',
          submenu: [
            { title: 'BPO/Tech support', path: '/services/bpo-tech-support' },
            { title: 'Telecom', path: '/services/telecom' },
            { title: 'E-publications', path: '/services/e-publications' },
            { title: 'Telemarketing', path: '/services/telemarketing' }
          ]
        },
        {
          title: 'IT/Software',
          submenu: [
            { title: 'Software Development', path: '/services/software-development' },
            { title: 'Software Testing', path: '/services/software-testing' },
            { title: 'Mobile Applications', path: '/services/mobile-applications' },
            { title: 'Cloud Computing', path: '/services/cloud-computing' }
          ]
        },
        { title: 'Staffing & Solutions', path: '/services/staffing' },
        { title: 'Training & Placements', path: '/services/training' },
        { title: 'Internships', path: '/services/internships' }
      ]
    },
    { title: 'Clients', path: '/clients' },
    {
      title: 'Insights',
      submenu: [
        { title: 'Events', path: '/insights/events' },
        { title: 'Gallery', path: '/insights/gallery' },
        { title: "FAQ's", path: '/insights/faqs' }
      ]
    },
    {
      title: 'Careers',
      submenu: [
        { title: 'Job Openings', path: '/careers/jobs' },
        { title: 'Registration', path: '/careers/register' }
      ]
    },
    { title: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Glossary Softtech" className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.path ? (
                  <Link
                    to={item.path}
                    className="text-gray-700 hover:text-blue-600 py-2"
                  >
                    {item.title}
                  </Link>
                ) : (
                  <div className="text-gray-700 hover:text-blue-600 py-2 cursor-pointer">
                    {item.title}
                  </div>
                )}

                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {item.submenu.map((subItem, subIndex) => (
                      <div key={subIndex}>
                        {subItem.path ? (
                          <Link
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                          >
                            {subItem.title}
                          </Link>
                        ) : (
                          <div className="relative group/sub">
                            <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                              {subItem.title}
                            </div>
                            {subItem.submenu && (
                              <div className="absolute left-full top-0 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300">
                                {subItem.submenu.map((subSubItem, subSubIndex) => (
                                  <Link
                                    key={subSubIndex}
                                    to={subSubItem.path}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                                  >
                                    {subSubItem.title}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-white"
      >
        <div className="px-4 py-2">
          {menuItems.map((item, index) => (
            <div key={index} className="py-2">
              {item.path ? (
                <Link
                  to={item.path}
                  className="block text-gray-700 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ) : (
                <>
                  <div className="text-gray-700 font-medium">{item.title}</div>
                  {item.submenu && (
                    <div className="pl-4 mt-2">
                      {item.submenu.map((subItem, subIndex) => (
                        <div key={subIndex} className="py-1">
                          {subItem.path ? (
                            <Link
                              to={subItem.path}
                              className="block text-gray-600 hover:text-blue-600"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.title}
                            </Link>
                          ) : (
                            <>
                              <div className="text-gray-600 font-medium">
                                {subItem.title}
                              </div>
                              {subItem.submenu && (
                                <div className="pl-4 mt-1">
                                  {subItem.submenu.map((subSubItem, subSubIndex) => (
                                    <Link
                                      key={subSubIndex}
                                      to={subSubItem.path}
                                      className="block py-1 text-gray-600 hover:text-blue-600"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {subSubItem.title}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navigation; 