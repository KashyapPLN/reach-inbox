import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login/Login.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
