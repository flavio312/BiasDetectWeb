import React from 'react';
import Sidebar from '../organisms/Sidebar';
import Topbar from '../organisms/TopBar';

export default function DashboardTemplate({title,children,drawer}){
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Topbar title={title} />
        <main className="main">{children}</main>
      </div>
      {drawer}
    </div>
  )
}