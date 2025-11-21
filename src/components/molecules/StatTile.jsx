import React from 'react';
export default function StatTile({title,value,meta}){
  return (
    <div className="stat">
      <div className="small">{title}</div>
      <div style={{fontSize:20,fontWeight:700}}>{value}</div>
      {meta && <div className="small">{meta}</div>}
    </div>
  )
}