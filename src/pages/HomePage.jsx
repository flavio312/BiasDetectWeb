import DashboardTemplate from '../components/templates/DashboardTemplate';
import Card from '../components/molecules/Card';
import StatTile from '../components/molecules/StatTile';

export default function HomePage(){
  return (
    <DashboardTemplate title={'Performance General'}>
      <div className="grid-3">
        <Card>
          <h3>Overview</h3>
          <p className="small">Resumen general</p>
        </Card>
        <Card>
          <h3>Quick Actions</h3>
        </Card>
        <Card>
          <h3>Notifications</h3>
        </Card>
      </div>

      <div style={{height:16}} />

      <div className="grid-2">
        <StatTile title={'Textos Analizados'} value={'1,458'} />
        <StatTile title={'Sesgos Detectados'} value={'3,892'} />
      </div>

      <div style={{height:16}} />
      <Card>
        <h3>Progress</h3>
        <div style={{height:120,background:'linear-gradient(90deg,#eef3ff,#fff)',borderRadius:8}}></div>
      </Card>
    </DashboardTemplate>
  )
}