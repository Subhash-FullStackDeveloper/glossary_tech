import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setIsDark(!isDark)}
      className="fixed bottom-4 left-4 p-3 rounded-full shadow-lg z-50
        bg-white dark:bg-gray-800 text-gray-800 dark:text-white
        hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <FaSun className="w-6 h-6" /> : <FaMoon className="w-6 h-6" />}
    </motion.button>
  );
};

export default ThemeToggle; 