import React from 'react';
export default function Avatar({size=40,src=null}){
  const style = {width:size,height:size,borderRadius:8,background:'#eef2ff',display:'inline-block'};
  return src ? <img src={src} alt="avatar" style={style} /> : <div style={style}></div>
}