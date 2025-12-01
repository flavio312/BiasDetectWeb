import React from 'react';
import Button from '../atoms/Button';

export default function Topbar({title}){
  return (
    <header className="topbar">
      <div style={{display:'flex',alignItems:'center',gap:16}}>
        <h2 style={{margin:0}}>{title}</h2>
      </div>
    </header>
  )
}