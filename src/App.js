import { useEffect } from 'react';
import { useState } from 'react';
import {BrowserRouter, Routes, Route, json} from 'react-router-dom';
import { Homepage } from './component/Homepage';
import {Login} from './component/Login'
import {SignUp} from './component/SignUp'

function App() {
  const [valid, setValid] = useState(false);
  const id = 'kimcoding';
  const pw = "1234";
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login setValid={setValid} id={id} pw={pw}/>}></Route>
        <Route path='/' element={<Homepage valid={valid} setValid={setValid}/>}></Route>
        <Route path='/SignUp' element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
