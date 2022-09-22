import logo from '../logo.png';
import styled from 'styled-components';
const Stylenav = styled.header`
  height: 67px;
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

export const Header = () => {
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
          <StyleUl>
            <li><a href='./Login'>로그인</a></li>
            <li><a href='#'>회원가입</a></li>
          </StyleUl>
        </Stylenav>
      </header>
  );
}