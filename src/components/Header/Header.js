import logo from '../../images/logo.svg';
import './Header.css';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';





function Header() {

    return (
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

    );
}

export default Header;
