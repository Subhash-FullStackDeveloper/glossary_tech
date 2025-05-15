import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimes } from 'react-icons/fa';

const toastTypes = {
  success: {
    icon: FaCheckCircle,
    bgColor: 'bg-green-500',
  },
  error: {
    icon: FaExclamationCircle,
    bgColor: 'bg-red-500',
  },
  info: {
    icon: FaInfoCircle,
    bgColor: 'bg-blue-500',
  },
};

const Toast = ({ message, type = 'info', onClose, isVisible }) => {
  const { icon: Icon, bgColor } = toastTypes[type];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, x: '-50%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50
            ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg
            flex items-center space-x-3 min-w-[300px] max-w-[90vw]`}
        >
          <Icon className="text-xl flex-shrink-0" />
          <p className="flex-grow text-sm md:text-base">{message}</p>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <FaTimes />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast; 