import './Footer.css';

function Footer() {

    return (
    <footer className="footer">
        <div className="footer__title">
            <h2 className="footer__title-text">
                Учебный проект Яндекс.Практикум х BeatFilm.
            </h2>
        </div>
        <div className='footer__info'>
            <p className='footer__copyright'>© 2022</p>
            <ul className='footer__nav'>
                <li  className='footer__nav-item'>
                    <a className='footer__nav-link' href="https://practicum.yandex.ru" target="_blank">Яндекс.Практикум</a>
                </li>
                <li className='footer__nav-item'>
                    <a className='footer__nav-link' href="https://github.com" target="_blank">Github</a>
                </li>
            </ul>
        </div>

    </footer>
    );
}

export default Footer;
