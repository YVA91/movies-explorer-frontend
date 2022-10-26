import './AboutMy.css';
import avatare from '../../images/avatar.jpg'

function AboutMy() {

  return (
    <section className="aboutmy">
      <div className="aboutmy__title">
        <h2 className="aboutmy__title-text">
          Студент
        </h2>
      </div>
      <div className="aboutmy__main">
        <div className="aboutmy__main-info">
          <h2 className="aboutmy__main-info-name">Владимир Яхнев</h2>
          <p className="aboutmy__main-info-profession">Frontend-разработчик, 31 год</p>
          <p className="aboutmy__main-info-about"> Закончил РГГРУ по специальности геофизическая разведка. В настоящее время живу и работаю в Москве. Занимаю должность ведущего менеджера в компании, деятельностью которой является реализация и обслуживание профессионального
          печатного оборудования. Первый опыт с кодом получил проходя курс веб-разработка от Яндекс.Практикум. В свободное время читакю книги, учу английский язык и занимаюсь моделированием парусных судов. 
          </p>
          <ul className="aboutmy__main-list">
            <li className="aboutmy__main-item">
              <a className="aboutmy__main-link" href='https://github.com/YVA91' target="_blank">
                Github
              </a>
            </li>
          </ul>
        </div>
        <img className="aboutmy__main-img" src={avatare}/>
      </div>
    </section>
  );
}

export default AboutMy;
