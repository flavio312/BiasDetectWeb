import React from 'react';
import DashboardTemplate from '../components/templates/DashboardTemplate';
import ChatWindow from '../components/organisms/ChatWindow';

export default function ChatPage(){
  return (
    <DashboardTemplate title={'Chat Bot'}>
      <ChatWindow />
    </DashboardTemplate>
  )
}