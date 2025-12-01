import React from 'react';
import Icon from '../molecules/Icon';
import Avatar from '../atoms/Avatar';
import { NavLink } from 'react-router-dom';

export default function Sidebar(){
  return (
    <aside className="sidebar">
      <div className="logo">MyDashboard</div>
      <nav className="nav">
        <NavLink to="/home" className={({isActive})=> isActive? 'active':''}><Icon emoji={'🏠'} /><span>Home</span></NavLink>
        <NavLink to="/stats" className={({isActive})=> isActive? 'active':''}><Icon emoji={'📈'} /><span>Stats</span></NavLink>
        <NavLink to="/chat" className={({isActive})=> isActive? 'active':''}><Icon emoji={'💬'} /><span>Chat</span></NavLink>
        <NavLink to="/history" className={({isActive})=> isActive? 'active':''}><Icon emoji={'📜'} /><span>History</span></NavLink>
        <NavLink to="/settings" className={({isActive})=> isActive? 'active':''}><Icon emoji={'⚙️'} /><span>Settings</span></NavLink> <br /><br /><br /><br />
        <NavLink to="/" className={({isActive})=> isActive? 'active':''}><Icon emoji={'🚪'}/><span>Logout</span></NavLink>
      </nav>

      <div style={{marginTop:'auto'}}>
        <div style={{display:'flex',gap:12,alignItems:'center'}}>
          <Avatar />
          <div>
            <div style={{fontWeight:700}}>User Name</div>
            <div className="small">user@email.com</div>
          </div>
        </div>
      </div>
    </aside>
  )
}