import {Header} from './component/Header';
import {Main} from './component/Main';

function App() {
  return (
    <>
      <header className="app-container">
        <Header />
      </header>
      <main className='main-container'>
        <Main />
      </main>
    </>
  );
}

export default App;
