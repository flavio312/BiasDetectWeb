import React from 'react';
import Input from '../atoms/Input';

export default function InputGroup({ label, ...inputProps }) {
  return (
    <div style={{ marginBottom: 12 }}>
      {label && <div style={{ marginBottom: 6, fontSize: 13, color: '#374151' }}>{label}</div>}
      <Input {...inputProps} />
    </div>
  );
}
