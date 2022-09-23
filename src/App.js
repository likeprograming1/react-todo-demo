import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Homepage } from './component/Homepage';
import {Login} from './component/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/Login' element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
