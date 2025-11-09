import React from 'react';
import './Toast.css';

const Toast = ({ message, type, show }) => {
  if (!show) return null;

  return (
    <div className={`toast toast-${type}`}>
      <div className="toast-content">
        {type === 'success' && <span className="toast-icon">✅</span>}
        {type === 'error' && <span className="toast-icon">❌</span>}
        {type === 'info' && <span className="toast-icon">ℹ️</span>}
        <span className="toast-message">{message}</span>
      </div>
    </div>
  );
};

export default Toast;
