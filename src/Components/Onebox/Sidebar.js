import React, { useEffect } from 'react';
import './page1.css';
import logo from '../../media/logo-sm.png';
import find from '../../media/finduser.svg';
import home from '../../media/home.svg';
import mail from '../../media/mail.svg';
import send from '../../media/send.svg';
import menu from '../../media/menu.svg';
import bar from '../../media/bar.svg';
import inbox from '../../media/inbox.svg';

export default function Sidebar({mode}) {
  useEffect(()=>{
    let sidebar= document.getElementsByClassName('sidebar')[0]; // Access the first element
    if(sidebar) {
      if(mode === 'dark'){
        sidebar.style.background = '#101113';

      } else {
        sidebar.style.background = 'white';
      }
    }
  },[mode]);

  return (
    <div className='sidebar'>
      <div>
        <img src={logo} alt="logo"/>
      </div>
      <div className='sidebar-icons'>
        <img src={home} alt="home"/>
        <img src={find} alt="find"/>
        <img src={mail} alt="mail"/>
        <img src={send} alt="send"/>    
        <img src={menu} alt="menu"/>
        <img src={inbox} alt="inbox"/>
        <img src={bar} alt="bar"/>
      </div>
    </div>
  );
}
