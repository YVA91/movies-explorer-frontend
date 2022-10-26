import './Menu.css';
import { Link } from 'react-router-dom';

function Menu({ isOpenMenu, onCloseMenu }) {

  return (
    <section className={`menu ${isOpenMenu && 'menu_visibility'}`}>
      <div className="menu__container">
        <button className="menu-button-close" type="button" onClick={onCloseMenu}></button>
        <nav className="menu__nav">
          <nav className="menu__nav-main">
            <Link to="/" className="menu__nav-link">
              Главная
            </Link>
            <Link to="/movies" className="menu__nav-link">
              Фильмы
            </Link>
            <Link to="/saved-movies" className="menu__nav-link">
              Сохранённые фильмы
            </Link>
          </nav>
          <nav className="menu__nav-footer">
            <Link to="/profile" className="menu__nav-footer-link">Аккаунт</Link>
            <Link to="/profile" className="menu__nav-footer-button"></Link>
          </nav>
        </nav>
      </div>
    </section>
  );
}
export default Menu;