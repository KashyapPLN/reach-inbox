import React, { useEffect, useState } from 'react';
import './content.css';
import { Dropdown } from 'react-bootstrap';
import yellow from  '../../media/yellow.svg'
import { IoIosMore } from 'react-icons/io';
import { MdDeleteOutline, MdEdit, MdMarkunreadMailbox, MdPersonRemove } from 'react-icons/md';
import { FiClock } from 'react-icons/fi';

export default function Content({mode,threadId}) {
const [threads,setThreads]=useState(null);
  useEffect(()=>{
    async function getAllThreads(){
      const key= localStorage.getItem('token');
      const url = `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`;
      if(key&&threadId!==''){
        try {
          const response = await fetch(url,{headers:{
            Authorization: `Bearer ${key}`
          }});
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
      
          const data = await response.json();
                  console.log(data.data);
                  setThreads(data.data);
        } catch (error) {
          console.error(error.message);
        }
      }
     
    }
    getAllThreads();
  },[threadId])

  function formatDate(date){
        const localDate = new Date(date);  
    const formattedDate = localDate.toLocaleString();
    return formattedDate;
  }

  return (
    <div className='content'style={{color:mode==='dark'? 'white':'black'}}>
<div className='email-content-header'>
<div>
  <div style={{fontWeight:600}}>Orlando</div>
  <div style={{fontSize:'14px',color:'grey'}}>orlando@gmail.com</div>
</div>
<div className='content-select'>
<Dropdown>
<Dropdown.Toggle 
variant="light" 
id="dropdown-basic"
style={{ 
  border: '1px solid #343A40', 
  backgroundColor: mode === 'dark' ? '#25262B' : 'white',
  boxShadow: 'none', 
  display: 'flex', 
  alignItems: 'center',
 color:mode==='dark'? 'white' : 'black',
 height:'30px'
}}
className="custom-dropdown-toggle">
  <span className='me-2'><img src={yellow} style={{width:'20px',height:'20px'}}/></span>
Meeting Completed
</Dropdown.Toggle>

<Dropdown.Menu style={{ 
   backgroundColor: mode === 'dark' ? '#25262B' : 'white',
}}>
<Dropdown.Item href="#/action-1" style={{color:mode==='dark'? 'white' : 'black',backgroundColor:'transparent'}}>
 <span className='me-2'><img src={yellow} style={{width:'20px',height:'20px'}}/></span>
Meeting Completed</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
<Dropdown>
<Dropdown.Toggle 
variant="light" 
id="dropdown-basic"
style={{ 
  border: '1px solid #343A40', 
  backgroundColor: mode === 'dark' ? '#25262B' : 'white',
  boxShadow: 'none', 
  display: 'flex', 
  alignItems: 'center',
 color:mode==='dark'? 'white' : 'black',
  height:'30px'
}}
className="custom-dropdown-toggle">
 Move
</Dropdown.Toggle>

<Dropdown.Menu style={{ 
   backgroundColor: mode === 'dark' ? '#25262B' : 'white',
}}>
<Dropdown.Item href="#/action-1" style={{color:mode==='dark'? 'white' : 'black',backgroundColor:'transparent'}}><MdMarkunreadMailbox /> Mark as unread</Dropdown.Item>
<Dropdown.Item href="#/action-2" style={{color:mode==='dark'? 'white' : 'black',backgroundColor:'transparent'}}><MdEdit /> Edit lead</Dropdown.Item>
<Dropdown.Item href="#/action-3" style={{color:mode==='dark'? 'white' : 'black',backgroundColor:'transparent'}}><MdPersonRemove /> Remove lead</Dropdown.Item>
<Dropdown.Item href="#/action-4" style={{color:mode==='dark'? 'white' : 'black',backgroundColor:'transparent'}}><FiClock /> Set Remainder</Dropdown.Item>
<Dropdown.Item href="#/action-5" style={{color:mode==='dark'? 'white' : 'black',backgroundColor:'transparent'}}><MdDeleteOutline /> Delete</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
<button className='more' style={{
            color: mode === 'dark' ? 'white' : 'black', backgroundColor: mode === 'dark' ? '#25262B' : 'white',
            border: mode === 'dark' ? 'none' : '1px solid black'
          }}><IoIosMore /></button>
</div>
</div>
<div className='threads'>
{threads&& threads.map(data=><div key={data.id} className='content-threads'
style={{ 
  backgroundColor: mode === 'dark' ? '#141517' : 'white',
}}>
<div className='thread-heading'>
<span className='thread-subject'>{data.subject}</span>
<span className='thread-date' style={{color:'#AEAEAE'}}>{formatDate(data.sentAt)}</span>
</div>
<p classname='thread-from' style={{fontSize:'14px',color:'#AEAEAE',marginTop:20}}>from : {data.fromEmail}</p>
<p classname='thread-to' style={{fontSize:'14px',color:'#AEAEAE'}}>to : {data.toEmail}</p>
<div className='thread-body' dangerouslySetInnerHTML={{ __html: data.body }}></div>
</div>)}
</div>
    </div>
  );
}
