import styled from 'styled-components'
import logo from '../logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const MainCotainer = styled.div`
  position: relative;
  display: flex;
  width:100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
`
const StyleMain = styled.div`
  position: absolute;
  width: 400px;
  height: 350px;  
  border: 0.2 px #b5b5b5 solid;
  border-radius: 2px;
  box-shadow: 10px 10px 10px 1px #81818166;

  .header {
    width: 100%;
    height: 40px;
    background-color: #fff9f9;
    margin-top: 10px;
  }
 .header > .Link > img {
    display: block;
    margin: auto;
    padding: 5px;
  }
  .login-container {
    display: flex;
    justify-content: center;
  }
`
const StyleInput = styled.input`
  width: 200px;
  padding: 5px;
  border-radius: 5px;
`
const LoginContainer = styled.div`
  display: flex;
  height: 70%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .login-form > li {
    padding: 10px;
    list-style: none;
  }
  #idinput {
    box-shadow: 5px 5px 10px 1px #9c9c9c66;
    margin-left: 20px;
  }
  #idinput:focus {
    outline: none;
    box-shadow: 5px 5px 10px 1px #9c9c9c66;
    margin-left: 20px;
  }
  #pwinput {
    box-shadow: 5px 5px 10px 1px #9c9c9c66;
    margin-left: 12px;
  }
  #pwinput:focus {
    outline: none;
    box-shadow: 5px 5px 10px 1px #9c9c9c66;
    margin-left: 12px;
  }
  .info-form {
    display: flex;  
    margin-left: -25px;
  }
  .info-form > li:hover {
    color: #333;
    cursor: pointer;
  }
  .info-form > li {
    color: #747373;  
    list-style: none;
    font-size: 10px;
    padding: 2px;
    margin-right: 10px;
  }
`
const LoginButton = styled.button`
  border-radius: 5px;
  color: #333;
  background-color: #fff9f9;
  width: 150px;
  height: 40px;
  :hover {
    cursor: pointer;
    background-color: #feecec;
  }
`
export const Login = () => {
  const id = 'kimcoding';
  const pw = "1234";
  const [IsId, setIsId] = useState(null);
  const [IsPw, setIsPw] = useState(null);
  const goToMain = () => {
    console.log(this.props);
    this.props.history.push('/')
  }
  return (
    <MainCotainer>
      <StyleMain>
        <div className='header'>
          <Link className='Link' to='/'><img src={logo} alt="로고" /></Link>
        </div>
        <LoginContainer>
          <ul className='login-form'>
              <li>
                <label htmlFor="idinput">ID</label>
                <StyleInput 
                placeholder='아이디' 
                id="idinput" 
                value={IsId || ''} 
                onChange={(event)=>{setIsId(event.target.value)}}/>
              </li>
              <li>
                <label htmlFor="pwinput">PW</label>
                <StyleInput 
                type='password' 
                placeholder='비밀번호' 
                id='pwinput' 
                value={IsPw || ''} 
                onChange={(event)=>{setIsPw(event.target.value)}}/>
              </li>
            </ul>
            <ul className='info-form'>
              <li>아이디/비밀번호 찾기</li>
              <li>회원가입</li>
            </ul>
        </LoginContainer>
        <div className='login-container'>
          <LoginButton onClick={e => {
            if(IsId === id){
              if(IsPw === pw){
                e.stopPropagation();
                goToMain();
              }
            }else{
              alert('아이디 혹은 비밀번호가 일치하지 않습니다.')
            }
          }}>로그인</LoginButton> 
        </div>
      </StyleMain>
    </MainCotainer>
  )
}