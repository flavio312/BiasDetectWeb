import DashboardTemplate from '../components/templates/DashboardTemplate';
import Card from '../components/molecules/Card';

export default function HistoryPage(){
  const items = new Array(6).fill(0).map((_,i)=>({id:i,title:`Titulo del Chat ${i+1}`,excerpt:'Lorem ipsum dolor sit amet.'}));
  return (
    <DashboardTemplate title={'History'}>
      <div style={{display:'flex',flexDirection:'column',gap:12}}>
        {items.map(it=> <Card key={it.id}><strong>{it.title}</strong><div className="small">{it.excerpt}</div></Card>)}
      </div>
    </DashboardTemplate>
  )
}