import React, { createContext, useContext, useState, useCallback } from 'react';
import Toast from '../components/Toast';

const ToastContext = createContext({
  showToast: () => {},
});

export const useToast = () => useContext(ToastContext);

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({
    message: '',
    type: 'info',
    isVisible: false,
  });

  const showToast = useCallback((message, type = 'info') => {
    setToast({ message, type, isVisible: true });
    setTimeout(() => {
      setToast(prev => ({ ...prev, isVisible: false }));
    }, 3000);
  }, []);

  const hideToast = useCallback(() => {
    setToast(prev => ({ ...prev, isVisible: false }));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </ToastContext.Provider>
  );
};

export default ToastContext; 