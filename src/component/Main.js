
import main1 from '../images/main1.png';
import main2 from '../images/main2.png';
import main3 from '../images/main3.png';
import main4 from '../images/main4.png';
import main5 from '../images/main5.png';

export const Main = () => {
  return (
    <section>
      <header className="main-header-container">
        <h2>본인을 관리하다 Todo-List</h2>
      </header>
      <article className='main-article-container'> 
        <img src={main1}/>
        <span>Todo-List를 해야하는 이유<br/> 목표설정을 하여 목표까지 <br/>도와주는 도우미 Todo-List</span>
      </article>
      <article className='main-article-container'>
        <span>저희의 Todo-List는<br/> 고객의 일정을 계획적으로 <br/>관리합니다.</span>
        <img src={main2}/>
      </article>
      <article className='main-article-container'>
        <img src={main3}/>
        <span>성공적인 나날을 위하여<br/> 이제 시작해 봅시다.</span>
      </article>
      <article className='main-article-container'>
        <span><h2>포기하지 마세요</h2><br/>저희도 포기하지 않습니다.</span>
        <img src={main4}/>
      </article>
      <article className='main-article-container'>
        <img src={main5}/>
        <span><h2>이제 시작합시다.</h2><br/>목표 지점까지!<br/>저희는 support해드리겠습니다.</span>
      </article>
    </section>
  )
}