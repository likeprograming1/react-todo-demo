import {Header} from '../component/Header';
import {Main} from '../component/Main';
import {Footer} from '../component/Footer';

export const Homepage = ({valid, setValid}) => {
  return (
        <>
          <Header valid={valid} setValid={setValid}/>
          <Main />
          <Footer />
        </>
  );
}