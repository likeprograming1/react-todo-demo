import logo from '../logo.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Stylenav = styled.header`
  width: 100%;
  display: flex;
  background-color: #fff9f9;
  position:fixed;
  z-index: 1;
`
const StyleUl = styled.ul`
  margin: 0 auto;
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  > li {
    padding: 16px;
  }

  > li > a {
    color: #333;
    text-decoration: none;
  }
`

export const Header = ({valid, setValid}) => {
  const logout = ({valid, setValid}) => {
    console.log(valid);
    setValid(false);
    navigator('/');
  }
  return (
      <header className='app-container'>
        <Stylenav>
          <StyleUl>
            <li><a href='#'><img src={logo} alt="Todolist"/></a></li>
            <li><a href='#'>기능</a></li>
            <li><a href='#'>회사소개</a></li>
            <li><a href='#'>다운로드</a></li>
            <li><a href='#'>맴버십</a></li>
          </StyleUl>
          {console.log(valid)}
          {
          valid ? 
          <StyleUl>
            <li><a href='#'>Todolist</a></li> 
          <li><Link onClick={logout}>로그아웃</Link></li>
          </StyleUl>
          :
          <StyleUl>
              <li><Link to='/Login'>로그인</Link></li>
              <li><Link to='/SignUp'>회원가입</Link></li> 
          </StyleUl>
          }
        </Stylenav>
      </header>
  );
}