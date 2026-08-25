import React, { createContext, useContext, useState, useCallback } from 'react';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'info', duration = 4000) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, duration);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  // Process Django Messages Framework responses automatically
  const handleDjangoMessages = useCallback((messagesArray) => {
    if (Array.isArray(messagesArray)) {
      messagesArray.forEach((msg) => {
        addToast(msg.message || msg.text || String(msg), msg.level || 'info');
      });
    }
  }, [addToast]);

  return (
    <ToastContext.Provider value={{ addToast, removeToast, handleDjangoMessages, toasts }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
