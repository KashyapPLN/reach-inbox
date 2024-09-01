import React from 'react';
import './emailDetails.css';
import { IoIosSend } from 'react-icons/io';

export default function EmailDetail({mode}) {
  return (
    <div className="email-detail" style={{color:mode==='dark'? 'white':'black'}}>
     <div className='leadDetails'>
<div className='lead-heading' style={{
            color: mode === 'dark' ? 'white' : 'black', backgroundColor: mode === 'dark' ? '#25262B' : 'white',
            border: mode === 'dark' ? 'none' : '1px solid black'
          }}>
Lead Details
</div>
<div style={{fontSize:'14px',display:'flex',flexDirection:'column',gap:'20px'}}>
<div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}><span>Name</span><span>Orlando</span></div>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}><span>Contact No</span><span>+54-9062827869</span></div>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}><span>Email ID</span><span>orlando@gmail.com</span></div>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}><span>LinkedIn</span><span>linkedin.com/in/timvadde</span></div>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}><span>Company Name</span><span>Reachinbox</span></div>
      </div>
     </div>
     <div className='activities'>
<div className='activities-heading' style={{
            color: mode === 'dark' ? 'white' : 'black', backgroundColor: mode === 'dark' ? '#25262B' : 'white',
            border: mode === 'dark' ? 'none' : '1px solid black'
          }}>
  Activities
</div>
<p><strong>Campaign Name:</strong> 3 Steps | 5 Days in Sequence</p>
        <ul>
          <li><strong>Step 1:</strong> Email -<p style={{color:'grey',fontSize:'14px'}}> <IoIosSend /> Sent 3rd Feb</p></li>
          <li><strong>Step 2:</strong> Email -<p style={{color:'grey',fontSize:'14px'}}> <IoIosSend /> Opened 5th Feb</p></li>
          <li><strong>Step 3:</strong> Email -<p style={{color:'grey',fontSize:'14px'}}> <IoIosSend /> Opened 5th Feb</p></li>
        </ul>
     </div >
    </div>
  );
}
