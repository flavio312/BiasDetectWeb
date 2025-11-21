import React from 'react';
export default function ChatBubble({text,author='bot'}){
  return <div className={`chat-bubble ${author==='user'?'user':''}`}>{text}</div>
}