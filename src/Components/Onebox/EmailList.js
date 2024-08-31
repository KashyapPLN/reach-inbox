import React from 'react';
import './page2.css';
import { Button, Dropdown } from 'react-bootstrap';
import { IoReload } from 'react-icons/io5';
import { IoIosArrowDown, IoIosSend } from 'react-icons/io';
import interestedTxt from '../../media/interested-txt.svg';
import interestedIcon from '../../media/interested-icon.svg';

export default function EmailList({ mode,allMails,threadId,setThreadId }) {
  function formatDateToShortDate(isoDate) {
    const date = new Date(isoDate);

    const options = { month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}
  return (
    <div className="email-list" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
      <div className='email-list-top'>
        <div className='email-list-heading-btns'>
          <div className='email-list-heading'>
            <Button className='all-inbox-btn' variant='text'>All Inbox(s) <IoIosArrowDown /></Button>
            <div>
              <span>25/25 </span><span style={{ color: 'grey' }}>Inboxes selected</span>
            </div>
          </div>
          <button className='reload-btn mt-3' style={{
            color: mode === 'dark' ? 'white' : 'black', backgroundColor: mode === 'dark' ? '#25262B' : 'white',
            border: mode === 'dark' ? 'none' : '1px solid black'
          }}><IoReload /></button>
        </div>
        <input className='search-box mt-3' type='search' style={{ color: mode === 'dark' ? 'white' : 'black', backgroundColor: mode === 'dark' ? '#25262B' : 'white' }} placeholder=' Search' />
        <div className='replies-div mt-3'>
          <div>
            <span className='replies-count' style={{ backgroundColor: mode === 'dark' ? '#25262B' : 'white' }}>26</span><span> New Replies</span>
          </div>
          <Dropdown>
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
              style={{
                border: 'none',
                backgroundColor: 'transparent',
                boxShadow: 'none',
                display: 'flex',
                alignItems: 'center',
                color: mode === 'dark' ? 'white' : 'black'
              }}
              className="custom-dropdown-toggle"
            >
              Newest
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ 
   backgroundColor: mode === 'dark' ? '#25262B' : 'white',
}}>
              <Dropdown.Item style={{color:mode==='dark'? 'white' : 'black',backgroundColor:'transparent'}} href="#/action-1">Newest</Dropdown.Item>
              <Dropdown.Item style={{color:mode==='dark'? 'white' : 'black',backgroundColor:'transparent'}} href="#/action-2">Oldest</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
         
        </div>
        <hr/>
      </div>
      <div>
        {allMails.length>0 && allMails.map((data)=>
        <div style={{cursor:'pointer'}} key={data.id} 
        onClick={(e)=>{console.log(data.threadId);setThreadId(data.threadId)}}
        className="email-item">
          <div className='email-item-heading'>
          <span style={{fontWeight:500}}>{data.fromEmail}</span>
          <span style={{fontSize:'14px',color:'grey'}}>{formatDateToShortDate(data.sentAt)}</span>
          </div>
          <p style={{fontSize:'14px'}}>{data.subject}</p>
          <div style={{display:'flex',flexDirection:'row',gap:'10px'}}>
            <span style={{fontSize:'12px',backgroundColor:'#25262B',padding:'2px 8px',display:'flex',alignItems:'center',
              width:'fit-content',borderRadius:'12px',
            }}>
              <img className='me-1' style={{height:'12px',width:'12px'}} src={interestedIcon}/>
              <img style={{height:'20px',width:'54px'}} src={interestedTxt}/>
            </span>
            <span style={{fontSize:'12px',backgroundColor:'#25262B',padding:'2px 8px',display:'flex',alignItems:'center',
              width:'fit-content',borderRadius:'12px',color: 'white',
            }}><IoIosSend className='me-1'/> Campaign Name</span>
          </div>
          <hr/>
        </div>)}
       </div>
    </div>
  );
}
