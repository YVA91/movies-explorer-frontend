import logo from '../../images/logo.svg';
import './Header.css';
import { Route, Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation'
import Menu from '../Menu/Menu'

function Header() {

    return (
    <>
    <Route exact path="/">
    <header className="header header_main ">
        <div className="header__container">
        <img className="header__logo" src={logo} alt="логотип" />
        <Navigation/>
        </div>
    </header>
    </Route>
    <Route exact path="/movies">
    <header className="header">
        <div className="header__container">
            <Link to="/" className="header__logo">
            <img src={logo} alt="логотип" />
            </Link>
            <Navigation/>
            
            <div className="header__burger"> 
            <span className="header__burger-item"></span>
            <span className="header__burger-item"></span>
            <span className="header__burger-item"></span>
          </div>
        </div>
    </header>
    </Route>
    <Route exact path={["/signup", "/signin"]} >
    <header className="header">
        <div className="header__container header__container_form">
            <Link to="/" className="header__logo header__logo_form">
            <img src={logo} alt="логотип"/>
            </Link>
        </div>
    </header>
    </Route>
    </>

    );
}

export default Header;
