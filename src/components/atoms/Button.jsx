import React from 'react';

export default function Button({ children, className = className, onClick, type = 'button' }) {
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
