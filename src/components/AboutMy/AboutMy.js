import './AboutMy.css';
import avatare from '../../images/avatar.jpg'

function AboutMy() {

    return (
    <section className="aboutMy">
        <div className="aboutMy__title">
            <h2 className="aboutMy__title-text">
                Студент
            </h2>
        </div>
        <div className="aboutMy__main">
            <div className="aboutMy__main-info">
                <h2 className="aboutMy__main-info-name">Владимир Яхнев</h2>
                <p className="aboutMy__main-info-profession">Frontend-разработчик, 31 год</p>
                <p className="aboutMy__main-info-about"> В том же году, по данным GitHub, сайтом пользовались более 100 000 пользователей, и он вырос до 90 000 уникальных общедоступных репозиториев, 12 000 из которых были разветвлены по крайней мере один раз, в общей сложности 135 000 репозиториев.[22]
                    В 2010 году на GitHub размещался 1 миллион репозиториев.[23] Год спустя это число удвоилось.[24] ReadWriteWeb сообщил, что GitHub превзошел SourceForge и Google Code по общему количеству коммитов за период с января по май 2011 года.[25]
                </p>
                <ul className="aboutmy__main-list">
                    <li className="aboutmy__main-item">
                        <a className="aboutmy__main-link" href='https://github.com/YVA91' target="_blank">
                            Github
                        </a>
                    </li>
                </ul>

            </div>
            <img className="aboutMy__main-img" src={avatare}/>
        </div>
    </section>
    );
}

export default AboutMy;
