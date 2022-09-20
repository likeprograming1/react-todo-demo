import {Header} from './component/Header';
import {Main} from './component/Main';
import {Footer} from './component/Footer';
function App() {
  return (
    <>
      <header className="app-container">
        <Header />
      </header>
      <main className='main-container'>
        <Main />
      </main>
      <footer className='footer-container'>
        <Footer />
      </footer>
    </>
  );
}

export default App;
