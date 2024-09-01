import React, { useEffect, useState } from 'react';
import './content.css';
import { Button, Dropdown, Modal } from 'react-bootstrap';
import yellow from  '../../media/yellow.svg'
import { IoIosMore } from 'react-icons/io';
import { MdDeleteOutline, MdEdit, MdMarkunreadMailbox, MdPersonRemove, MdReply } from 'react-icons/md';
import { FiClock } from 'react-icons/fi';
import Reply from './Reply';

export default function Content({mode,threadId}) {
const [threads,setThreads]=useState(null);
const [show,setShow]=useState(false);
const handleShow = () => setShow(true);
const [deleteShow,setDeleteShow]=useState(false);
const handleDeleteShow = () => setDeleteShow(true);
const handleDeleteClose = () => setDeleteShow(false);

  useEffect(()=>{
   
    async function getAllThreads(){
      const key= localStorage.getItem('token');
      const url = `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`;
      if(key&&threadId!==''&&threadId!==null&&threadId!==undefined){
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
    if(threadId!=='' && threadId!==null && threadId!==undefined){
      getAllThreads();
    }
   
  },[threadId])

  useEffect(() => {
    const handleKeyDown = (event) => {
           // Check if the 'R' key is pressed (event.key might be lowercase 'r')
      if (event.key.toLowerCase() === 'r' && event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA'&&threads) {
        handleShow();
      }
    };

    // Add the event listener
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [threads]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      
      // Check if the 'D' key is pressed (event.key might be lowercase 'r')
      if (event.key.toLowerCase() === 'd' && event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA'&&threads) {
        handleDeleteShow();
      }
    };

    // Add the event listener
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [threads]);

  async function handleDeleteThread(){
    const key= localStorage.getItem('token');
    const url = `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
       Authorization: `Bearer ${key}`
        },
      });
  
      // Check if the response is successful
      if (response.ok) {
        console.log('Mail deleted successfully');
        const data = await response.json();
        handleDeleteClose();
        console.log(data);
      } else {
        console.error('Failed to delete mail:', response.status);
      }
    } catch (error) {
      console.error('Error occurred while deleting mail:', error);
    }
  }

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
{threads && <button className='create-account mt-4' onClick={handleShow}>
  <MdReply className='me-1'style={{fontSize:'20px'}} />Reply</button>}
{threads&&<Reply mode={mode} setShow={setShow} handleShow={handleShow} show={show} threadId={threadId} threads={threads}/>}

<Modal  centered show={deleteShow} onHide={handleDeleteClose} className={mode === 'dark' ? 'modal-dark' : 'modal-light'} 
                style={{ border: '1px solid #41464B'}}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header> */}
        <Modal.Body style={{textAlign:'center'}}>
          <h3>Are you sure ?</h3>
<p className='mt-2'>Your selected email will be deleted</p>
<div className='mt-4'>
<Button className='me-3' variant="secondary" onClick={handleDeleteClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteThread}>
            Delete
          </Button>
</div>
        </Modal.Body>
          </Modal>
</div>

    </div>
  );
}
