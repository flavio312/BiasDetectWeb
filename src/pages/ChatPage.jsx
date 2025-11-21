import React from 'react';
import DashboardTemplate from '../components/templates/DashboardTemplate';
import ChatWindow from '../components/organisms/ChatWindow';
import DrawerMenu from '../components/organisms/DrawerMenu';

export default function ChatPage(){
  return (
    <DashboardTemplate title={'Chat Bot'} drawer={<DrawerMenu/>}>
      <ChatWindow />
    </DashboardTemplate>
  )
}