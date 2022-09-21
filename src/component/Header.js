import logo from '../logo.png';

export const Header = () => {
  return (
      <nav className="header-container">
        <ul className="menu-info">
          <li><a href='#'><img src={logo} alt="Todolist"/></a></li>
          <li><a href='#'>기능</a></li>
          <li><a href='#'>회사소개</a></li>
          <li><a href='#'>다운로드</a></li>
          <li><a href='#'>맴버십</a></li>
        </ul>
        <ul className="login-info">
          <li><a href='../Login.jsx'>로그인</a></li>
          <li><a href='#'>회원가입</a></li>
        </ul>
      </nav>
  );
}