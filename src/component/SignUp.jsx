import styled from 'styled-components'
import logo from '../logo.png';
import { Link} from 'react-router-dom';
import {useNavigate} from 'react-router';
import { useState } from 'react';

const SignUoMain = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const SignUpbox = styled.section`
  width: 400px;
  height: 550px;
  box-shadow: 5px 5px 10px 1px #9c9c9c66;
  text-align: center;
  .header {
    width: 100%;
    height: 40px;
    background-color: #fff9f9;
    margin-top: 50px;
  }
  .header > .Link > img {
    display: block;
    margin: auto;
    padding: 5px;
  }
  > ul {
    margin-top: 50px;
    list-style: none;
    li {
      display: flex;
      align-items: center;
      margin-top: 1rem;
      height: 40px;
      padding: 5px;
      label{
        text-align: center;
        width: 100px;
        font-size: 14px;
      }
      input {
        width: 200px;
        margin-left: 20px;
        padding: 5px;
        border-radius: 8px;
        box-shadow: 5px 5px 10px 1px #9c9c9c66;
        :focus {
          outline: #fff9f9;
        }
      }
    }
  }
`
const SignButton = styled.button`
  margin-top: 70px;
  background-color: #fff9f9;
  color: #333;
  border-radius: 8px;
  width: 200px;
  height: 55px;
  font-size: 20px;
  cursor: pointer;
  :hover {
    background-color: #333;
    color: #fff9f9;
  }
`
export const SignUp = () => {
  const [id, setId]= useState(null);
  const [pw, setPw] = useState(null);
  const [repw, setRepw] = useState(null);
  const [email, setEmail] = useState(null);
  const emailtest = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  const navigator = useNavigate();

  const Sinupcheck = () => {
    if(emailtest.test(email) && pw === repw && id.length > 5){
      sessionStorage.setItem('IsId',JSON.stringify(id));
      sessionStorage.setItem('IsPw',JSON.stringify(pw));
      navigator('/');
    }
  }
  const idChange = (event) => {
    setId(event.target.value)
  }
  return (
    <SignUoMain>
      <SignUpbox>
        <div className='header'>
          <Link className='Link' to='/'><img src={logo} alt="로고" /></Link>
        </div>
        <ul>
          <li>
            <label>이메일</label>
            <input 
              type="email" 
              value={email||''} 
              name='email' 
              placeholder='이메일'
              onChange={(event)=>setEmail(event.target.value)}
            ></input>
          </li>
          <li>
            <label>아이디</label>
            <input 
              value={id||''} 
              name='id' 
              placeholder='아이디'
              onChange={(event)=>idChange(event)}
            ></input>
          </li>
          <li>
            <label>비밀번호</label>
            <input 
              type="password" 
              value={pw||''} 
              name='pw' 
              placeholder='비밀번호'
              onChange={(event)=>setPw(event.target.value)}
            ></input>
          </li>
          <li>
            <label>비밀번호 확인</label>
            <input 
              type="password" 
              value={repw||''} 
              name='rpw' 
              placeholder='비밀번호 재확인'
              onChange={(event)=>setRepw(event.target.value)}
            ></input>
          </li>
        </ul>
        <SignButton onClick={Sinupcheck}>회원가입</SignButton>
      </SignUpbox>
    </SignUoMain>
  )
}