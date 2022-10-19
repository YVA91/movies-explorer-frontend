import logo from '../../images/logo.svg';
import './Header.css';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';
import exit from '../../images/exit.png'




function Header() {

    return (
    <>
    <Route exact path="/">
    <header className="header">
        <div className="header__container">
        <img className="header__logo" src={logo} alt="логотип" />
        <nav className="header__nav">
            <Link to="/sign-up" className="header__link">
            Регистрация
            </Link>
            <Link to="/sign-in" className="header__link">
            Войти
        </Link>
        </nav>
        </div>
    </header>
    </Route>
    <Route exact path="/movies">
    <header className="header header_movies">
        <div className="header__container">
            <img className="header__logo" src={logo} alt="логотип" />
            <nav className="header__nav header__nav_movies">
                <nav>
                <Link to="/" className="header__link-movies">
                    Фильмы
                </Link>
                <Link to="/" className="header__link-movies">
                    Сохранённые фильмы
                </Link>
                </nav>
                    <nav className="header__container-link">
                    <Link to="/" className="header__link-movies header__link-movies_account">Аккаунт</Link>
                    <Link to="/" className="header__link-movies header__link-movies_button">
                    </Link>
                </nav>
            </nav>
        </div>
    </header>
    </Route>
    </>

    );
}

export default Header;
