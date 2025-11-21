import React from 'react';
import DashboardTemplate from '../components/templates/DashboardTemplate';
import StatTile from '../components/molecules/StatTile';
import NavBar from '../components/organisms/NavBar';

export default function StatsPage(){
  return (
    <DashboardTemplate title={'Performance User'}>
      <div className="grid-2">
        <StatTile title={'Tasa Polarización'} value={'68%'} />
        <StatTile title={'Confianza Media'} value={'91%'} />
      </div>

      <div style={{height:16}} />
      <div className="card">Graph placeholder</div>
    </DashboardTemplate>
  )
}