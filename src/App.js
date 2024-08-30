import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login.js';
import OneBox from './Components/Onebox/OneBox.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<OneBox/>}/>
      </Routes>
    </div>
  );
}

export default App;
