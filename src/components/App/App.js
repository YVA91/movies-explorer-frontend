import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer'
import Movies from '../Movies/Movies'
import Register from '../Register/Register'
import Login from '../Login/Login'
import PageNotFound from '../PageNotFound/PageNotFound';
import Menu from '../Menu/Menu';
import Profile from '../Profile/Profile'
import SavedMovies from '../SavedMovies/SavedMovies'
import { getCreateMovies } from '../../utils/MoviesApi'
import { Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [isOpenMenu, setisOpenMenu] = useState(false);
  const [movies, setMovies] = useState([]);

  function handleOpenMenuClick() {
    if (isOpenMenu === false) {
      setisOpenMenu(true)
    } else
      setisOpenMenu(false)

  }

  useEffect(() => {
    function closeByEscapeAndOverlay(evt) {
      if (evt.key === 'Escape') {
        handleOpenMenuClick();
      }
      if (evt.target.classList.contains('menu')) {
        handleOpenMenuClick()
      }
    }
    if (isOpenMenu) {
      document.addEventListener('keydown', closeByEscapeAndOverlay);
      document.addEventListener("mousedown", closeByEscapeAndOverlay);
      return () => {
        document.removeEventListener('keydown', closeByEscapeAndOverlay);
        document.removeEventListener("mousedown", closeByEscapeAndOverlay);
      }
    }
  })

  useEffect(() => {
    getCreateMovies()
      .then((movie) => {
        setMovies(movie);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])


  return (
    <>
      <Header
        onMenu={handleOpenMenuClick}
      />
      <Switch>
        <Route exact path="/">
          <Main />
          <Footer />
        </Route>
        <Route path="/movies">
          <Movies
            movies={movies}
          />
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies
            movies={movies}
          />
          <Footer />
        </Route>
        <Route path="/signup">
          <Register
            title="Добро пожаловать!"
            buttonText="Зарегистрироваться"
          />
        </Route>
        <Route path="/signin">
          <Login
            title="Рады видеть!"
            buttonText="Войти"
          />
        </Route>
        <Route path="/profile">
          <Profile
          />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <Menu
        isOpenMenu={isOpenMenu}
        onCloseMenu={handleOpenMenuClick}
      />
    </>
  )
}
export default App;
