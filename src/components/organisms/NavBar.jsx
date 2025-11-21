import React from 'react';

export default function NavBar(){
  return (
    <div className="navbar">
      <div className={`nav-icon`} title="Home">🏠</div>
      <div className={`nav-icon`} title="Dashboard">📊</div>
      <div className={`nav-icon active`} title="Chat">💬</div>
      <div className={`nav-icon`} title="History">📜</div>
      <div className={`nav-icon`} title="Settings">⚙️</div>
    </div>
  );
}