import React from 'react';
export default function TabGroup({tabs,active=0,onChange}){
  return (
    <div style={{display:'flex',gap:8}}>
      {tabs.map((t,i)=> (
        <button key={t} onClick={()=>onChange?.(i)} className={i===active? 'btn btn-ghost':'btn btn-ghost'}>{t}</button>
      ))}
    </div>
  )
}