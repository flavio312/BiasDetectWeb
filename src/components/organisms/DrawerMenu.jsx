import React from 'react';
import Avatar from '../atoms/Avatar';
export default function DrawerMenu(){
  return (
    <aside className="drawer">
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <Avatar />
        <div>
          <div style={{fontWeight:700}}>User Name</div>
          <div className="small">role</div>
        </div>
      </div>

      <div style={{height:12}} />
      <nav style={{display:'flex',flexDirection:'column',gap:8}}>
        <button className="btn">Input button</button>
        <button className="btn">Settings</button>
        <button className="btn">Help</button>
        <button className="btn">Logout</button>
      </nav>
    </aside>
  )
}