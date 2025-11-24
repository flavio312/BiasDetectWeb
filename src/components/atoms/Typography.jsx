import React from 'react';

export function H1({ children, className = className }) {
  return <h1 className={className}>{children}</h1>;
}
export function Small({ children, className=className }) {
  return <div className={className}>{children}</div>;
}
