import React from 'react';

export default function Button({ children, className = '', onClick, type = 'button' }) {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
