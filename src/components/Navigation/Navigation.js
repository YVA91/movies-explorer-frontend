import './Navigation.css';
import { Route, Link } from 'react-router-dom';

function Navigation() {

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
      <Route exact path={["/movies", "/profile", "/saved-movies"]}>
        <nav className="navigation navigation_movies">
          <nav>
            <Link to="/movies" className="navigation__link-movies">
              Фильмы
            </Link>
            <Link to="/saved-movies" className="navigation__link-movies">
              Сохранённые фильмы
            </Link>
          </nav>
          <nav className="navigation__container-link">
            <Link to="/profile" className="navigation__link-movies navigation__link-movies_account">Аккаунт</Link>
            <Link to="/profile" className="navigation__link-movies navigation__link-movies_button">
            </Link>
          </nav>
        </nav>
      </Route>
    </>
  );
}

export default Navigation;