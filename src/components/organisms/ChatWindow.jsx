import React from 'react';
import ChatBubble from '../molecules/ChatBubble';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

export default function ChatWindow(){
  const [messages,setMessages] = React.useState([
    {id:1,author:'bot',text:'Hello User Name — Where do we start?'}
  ]);
  const [text,setText] = React.useState('');

  function send(){
    if(!text.trim()) return;
    setMessages(m=>[...m,{id:Date.now(),author:'user',text}]);
    setText('');
    setTimeout(()=>setMessages(m=>[...m,{id:Date.now()+1,author:'bot',text:'Ejemplo de respuesta del bot.'}]),600);
  }

  return (
    <div>
      <div className="chat-area card">
        {messages.map(m=> <ChatBubble key={m.id} text={m.text} author={m.author} />)}
      </div>

      <div style={{height:12}} />
      <div className="chat-input">
        <Input placeholder="Message chat" value={text} onChange={e=>setText(e.target.value)} />
        <Button className={'btn-primary'} onClick={send}>Send</Button>
      </div>
    </div>
  )
}