import './Portfolio.css';
import link from '../../images/link.png'

function Portfolio() {

    return (
    <section className="portfolio">
        <h2 className="portfolio__title">
            Портфолио
        </h2>
        <ul className="portfolio__list">
            <li className="portfolio__item">
                <p className="portfolio__item-text">Статичный сайт</p>
                <a className="portfolio__item-link" href='https://github.com/YVA91/react-mesto-api-full' target="_blank">
                    <img src={link} className='portfolio__arrow' alt='стрелка'/>
                </a>
            </li>
            <li className="portfolio__item">
                <p className="portfolio__item-text">Адаптивный сайт</p>
                <a className="portfolio__item-link" href='https://github.com/YVA91/russian-travel-Iakhnev' target="_blank">
                    <img src={link} className='portfolio__arrow' alt='стрелка'/>
                </a>
            </li>
            <li className="portfolio__item">
                <p className="portfolio__item-text">Одностраничное приложение</p>
                <a className="portfolio__item-link" href='https://github.com/YVA91/how-to-learn' target="_blank">
                    <img src={link} className='portfolio__arrow' alt='стрелка'/>
                </a>
            </li>
        </ul>
    </section>
    );
}

export default Portfolio;
