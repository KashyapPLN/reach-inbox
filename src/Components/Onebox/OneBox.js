import React, { useEffect, useState } from 'react';
import './onebox.css';
import Sidebar from './Sidebar';

import emptyMsg from '../../media/No Message illustration.svg';

import EmailList from './EmailList';
import OneBoxHeader from './OneBoxHeader';
import EmailDetail from './EmailDetails';
import Content from './Content';
import { useNavigate } from 'react-router-dom';

export default function OneBox() {
  const [mode,setMode]=useState("dark");
  const [empty,setEmpty]=useState(true);
  const [allMails,setAllMails]=useState(null);
  const [threadId,setThreadId]=useState(null);
  const navigate=useNavigate();
  async function getAllMails(key){
    const url = "https://hiring.reachinbox.xyz/api/v1/onebox/list";
    try {
      const response = await fetch(url,{headers:{
        Authorization: `Bearer ${key}`
      }});
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const data = await response.json();
      if(data.data.length>0){
        setAllMails(data.data);
        setEmpty(false);
      }
      console.log(data.data);
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(()=>{
    var myParam = window.location.search.split('token=')[1];
    localStorage.setItem('token',myParam);
    console.log(myParam);
    if(myParam===null||myParam===undefined){
navigate('/login');
    }else{
      getAllMails(myParam);
    }
  },[])
  
  
  return (
    <div className="onebox-container">
        <Sidebar mode={mode}/>
        <div className='onebox-content'>
       <OneBoxHeader mode={mode} setMode={setMode}/>
            <div className='onebox-main-content' style={{backgroundColor:mode==='dark'? 'black':'white'}}>
{empty&&<div className='empty-div'><img className='empty-msg' src={emptyMsg}/></div>}
{!empty&&<EmailList mode={mode} allMails={allMails} threadId={threadId} setThreadId={setThreadId}/>}
{!empty&&<Content mode={mode} threadId={threadId}/>}
{!empty&&<EmailDetail mode={mode}/>}
            </div>          
        </div>
           </div>
  )
}
