import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Homepage } from './component/Homepage';
import {Login} from './component/Login'

function App() {
  const [valid, setValid] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login setValid={setValid}/>}></Route>
        <Route path='/' element={<Homepage valid={valid} setValid={setValid}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
