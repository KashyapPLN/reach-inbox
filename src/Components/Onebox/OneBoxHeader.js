import React from 'react';
import './onebox.css';
import eclipse from '../../media/eclipse.svg';
import sun from '../../media/sun.svg';
import { Dropdown } from 'react-bootstrap';

export default function OneBoxHeader({mode,setMode}) {
  return (
    <div className='content-header' style={{backgroundColor:mode==='dark'? '#1F1F1F':'white'}}>
    <div id='header-text'style={{color:mode==='dark'? 'white':'black'}}>Onebox</div>
    <div className='content-header-right'>
    <div className='mode-btns' style={{backgroundColor:mode==='dark'? 'var(--Table-BG, #222426)':'white'}}>
<img
src={eclipse}
alt='Dark Mode'
onClick={() => setMode('dark')}
style={{ opacity: mode === 'dark' ? 1 : 0.5 }}
className={mode === 'dark' ? 'active' : ''}
/>
<img
src={sun}
alt='Light Mode'
onClick={() => setMode('light')}
style={{ opacity: mode === 'light' ? 1 : 0.5 }}
className={mode === 'light' ? 'active' : ''}
/>
</div>
    <div>
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
 color:mode==='dark'? 'white' : 'black'
}}
className="custom-dropdown-toggle"
>
Tim's workspace
</Dropdown.Toggle>

<Dropdown.Menu>
<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
    </div>
    </div>
    </div>
  )
}
