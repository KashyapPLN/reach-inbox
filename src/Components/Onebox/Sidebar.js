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
import { Badge } from 'react-bootstrap';

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
        <div style={{position:'relative',backgroundColor:'grey',padding:'6px',borderRadius:'8px'}}>
        <img src={inbox} alt="inbox" />
        <Badge pill bg="danger" style={{position:'absolute',top:-10,right:-20,fontSize:'10px'}}>
       12+
      </Badge>
      </div>
        <img src={bar} alt="bar"/>
      </div>
    </div>
  );
}
