import React from 'react';
export default function Icon({emoji,label}){
  return <div style={{width:28,height:28,display:'flex',alignItems:'center',justifyContent:'center'}} title={label}>{emoji}</div>
}