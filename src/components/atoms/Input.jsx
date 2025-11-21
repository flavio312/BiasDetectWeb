import React from 'react';

export default function Input({ value, onChange, placeholder = '', type = 'text', name }) {
  return (
    <input
      className="input"
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete="off"
    />
  );
}
