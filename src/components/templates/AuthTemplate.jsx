import React from 'react';
import AuthCard from '../organisms/Authcard';

export default function AuthTemplate({title,subtitle,mode='login'}){
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100vh'}}>
      <div style={{width:980,display:'flex',gap:24,alignItems:'center'}}>
        <div style={{flex:1}}>
          <h1 style={{fontSize:42,margin:0}}>{title}</h1>
          <p style={{color:'var(--muted)'}}>{subtitle}</p>
        </div>
        <div style={{width:420}} className="card">
          <AuthCard mode={mode} />
        </div>
      </div>
    </div>
  )
}