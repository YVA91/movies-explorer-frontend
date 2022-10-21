import './Menu.css';
import { Route, Link } from 'react-router-dom';

function Menu() {

    return (
    <>
    



    <Route exact path="/">
        <nav className="navigation">
            <Link to="/signup" className="navigation__link">
            Регистрация
            </Link>
            <Link to="/signin" className="navigation__link">
            Войти
        </Link>
        </nav>
    </Route>
    <Route exact path="/movies">
        <nav className="navigation navigation_movies">
            <nav>
            <Link to="/" className="navigation__link-movies">
                Фильмы
            </Link>
            <Link to="/" className="navigation__link-movies">
                Сохранённые фильмы
            </Link>
            </nav>
                <nav className="navigation__container-link">
                <Link to="/" className="navigation__link-movies navigation__link-movies_account">Аккаунт</Link>
                <Link to="/" className="navigation__link-movies navigation__link-movies_button">
                </Link>
            </nav>
        </nav>
    </Route>
    </>

    );
}

export default Menu;