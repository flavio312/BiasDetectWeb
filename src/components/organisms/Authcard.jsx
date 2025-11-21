import React from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

export default function AuthCard({mode='login'}){
  const [tab,setTab] = React.useState(mode==='login'?0:1);
  return (
    <div style={{maxWidth:480,margin:'0 auto'}}>
      <div style={{display:'flex',gap:12,marginBottom:12}}>
        <button className={tab===0? 'btn btn-primary': 'btn btn-ghost'} onClick={()=>setTab(0)}>Login</button>
        <button className={tab===1? 'btn btn-primary': 'btn btn-ghost'} onClick={()=>setTab(1)}>Register</button>
      </div>

      {tab===1 && <Input placeholder="Name" />}
      <div style={{height:8}} />
      <Input placeholder="E-mail" />
      <div style={{height:8}} />
      <Input placeholder="Password" type="password" />
      <div style={{height:12}} />
      <Button className="btn-primary">{tab===0? 'Login':'Register'}</Button>
    </div>
  )
}