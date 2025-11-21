import React from 'react';

export function H1({ children, className = '' }) {
  return <h1 className={`auth-title ${className}`}>{children}</h1>;
}
export function Small({ children }) {
  return <div className="small">{children}</div>;
}
