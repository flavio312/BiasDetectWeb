import React from 'react';
import Button from '../atoms/Button';

export default function Topbar({title}){
  return (
    <header className="topbar">
      <div style={{display:'flex',alignItems:'center',gap:16}}>
        <h2 style={{margin:0}}>{title}</h2>
      </div>
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <Button className={'btn-ghost'}>Invite</Button>
        <Button className={'btn-primary'}>Upgrade</Button>
      </div>
    </header>
  )
}