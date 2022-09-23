import styled from 'styled-components'
import logo from '../logo.png';
import { Link } from 'react-router-dom';
const MainCotainer = styled.div`
  width:100%;
  height: 100vh;
`
const StyleMain = styled.div`
  display: block;
  margin: 0 auto;
  width: 400px;
  height: 300px;
  border: 1px #333 solid;
  border-radius: 2px;
  box-shadow: 2px 1px 2px 1px #333;
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
`
const StyleInput = styled.input`
  width: 200px;
  height: 20px;
  border: 0.5px #333 solid;
  border-radius: 5px;
`
const LoginContainer = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
  .Id-container{
    width: 100%;
    border: 1px red solid;
  }
  h4{
    display: inline;
  }
  
`
export const Login = () => {
  return (
    <MainCotainer>
      <StyleMain>
        <div className='header'>
          <Link className='Link' to='/'><img src={logo} alt="로고" /></Link>
        </div>
        <LoginContainer>
          <div className='Id-container'>
            <h4>ID : </h4>
            <StyleInput placeholder='아이디'/>
          </div>
          <div className='Pw-container'>
            <h4>PW : </h4>
            <StyleInput placeholder='비밀번호'/>
          </div>
        </LoginContainer>
      </StyleMain>
    </MainCotainer>
  )
}