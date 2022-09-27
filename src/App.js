import { useEffect } from 'react';
import { useState } from 'react';
import {BrowserRouter, Routes, Route, json} from 'react-router-dom';
import { Homepage } from './component/Homepage';
import {Login} from './component/Login'
import {SignUp} from './component/SignUp'

function App() {
  const [valid, setValid] = useState(false);
  const [Isid, setIsid] = useState('');
  const [Ispw, setIspw] = useState('');
  const id = 'kimcoding';
  const pw = "1234";
  useEffect(()=>{
    localStorage.setItem('id', JSON.stringify(Isid));
    localStorage.setItem('pw', JSON.stringify(Ispw));
  },[<SignUp/>])
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login setValid={setValid} id={id} pw={pw}/>}></Route>
        <Route path='/' element={<Homepage valid={valid} setValid={setValid}/>}></Route>
        <Route path='/SignUp' element={<SignUp setId={setIsid} setPw={setIspw} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
