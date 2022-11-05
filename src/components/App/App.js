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
import * as MainApi from '../../utils/MainApi';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [isOpenMenu, setisOpenMenu] = useState(false);
  const [saveMovies, setSaveMovies] = useState([]);
  const history = useHistory();
  const [errorServer, setErrorServer] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [isPreloader, setIsPreloader] = useState(false);
  const [filterSaveMovies, setFilterSaveMovies] = useState([]);
  const [inputdisabled, setInputdisabled] = useState(true);

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
    MainApi.getUserInfo()
      .then((data) => {
        setCurrentUser(data)
        setLoggedIn(true)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  useEffect(() => {
    history.listen(() => {
      setErrorServer('')
    })
  }, [history]);

  useEffect(() => {
    if (loggedIn) {
      setIsPreloader(true)
      MainApi.getSaveMovies()
        .then((movie) => {
          setSaveMovies(movie);
          setFilterSaveMovies(movie);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsPreloader(false)
        });
    }
  }, [loggedIn,])

  function handleOpenMenuClick() {
    if (isOpenMenu === false) {
      setisOpenMenu(true)
    } else
      setisOpenMenu(false)
  }

  function handleSubmitRegister(email, password, name) {
    setInputdisabled(false)
    MainApi.register(email, password, name)
      .then((data) => {
        history.push('/movies')
        setErrorServer('');
        setCurrentUser(data)
        setLoggedIn(true)
      })
      .catch((err) => {
        console.log(err)
        if (err === 409) {
          setErrorServer('Пользователь с таким e-mail уже зарегистрирован')
        } else {
          setErrorServer('Что-то пошло не так')
        }
      })
      .finally(() => {
        setInputdisabled(true)
      });
  }

  function handleSubmitAuthorize(email, password) {
    setInputdisabled(false)
    MainApi.authorize(email, password)
      .then((data) => {
        setCurrentUser(data)
        setErrorServer('');
        history.push('/movies')
        setLoggedIn(true)
      })
      .catch((err) => {
        if (err === 401) {
          setErrorServer('Неправильные почта или пароль')
        } else {
          setErrorServer('Что-то пошло не так')
        }
      })
      .finally(() => {
        setInputdisabled(true)
      });
  }

  function handleUpdateUser(email, name) {
    setInputdisabled(false)
    MainApi.patchUserInfo(email, name)
      .then((data) => {
        setCurrentUser(data)
        setErrorServer('Данные успешно обновлены');
      })
      .catch((err) => {
        if (err === 409) {
          setErrorServer('Пользователь с таким e-mail уже зарегистрирован')
        } else {
          setErrorServer('Что-то пошло не так')
        }
      })
      .finally(() => {
        setInputdisabled(true)
      });
  }

  function handleSaveMovie(movie) {
    MainApi.postSaveMovie(movie)
      .then((data) => {
        setSaveMovies(oldArray => [...oldArray, data]);
        setFilterSaveMovies(oldArray => [...oldArray, data]);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function handleDeleteMovie(movie) {
    MainApi.deleteMovie(movie._id)
      .then(() => {
        setSaveMovies((state) => state.filter((c) => c._id !== movie._id));
        setFilterSaveMovies((state) => state.filter((c) => c._id !== movie._id));
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function handleExit() {
    MainApi.getExit()
      .then(() => {
        history.push('/')
        setLoggedIn(false)
        localStorage.removeItem('data')
        localStorage.removeItem('text')
        localStorage.removeItem('checkbox')
        setCurrentUser({})
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    if (loggedIn) {
      setIsPreloader(true)
      MainApi.getSaveMovies()
        .then((movie) => {
          setSaveMovies(movie);
          setFilterSaveMovies(movie);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsPreloader(false)
        });
    }
  }, [loggedIn,])

  return (
    <>
      <CurrentUserContext.Provider value={currentUser} >
        <Header
          loggedIn={loggedIn}
          onMenu={handleOpenMenuClick}
        />
        <Switch>
          <Route exact path="/">
            <Main />
            <Footer />
          </Route>

          <Route
            exact path="/movies"
            children={
              <ProtectedRoute loggedIn={loggedIn}>
                <Movies
                  inputdisabled={inputdisabled}
                  loggedIn={loggedIn}
                  onSaveMovie={handleSaveMovie}
                  onDeleteMovie={handleDeleteMovie}
                  saveMovies={saveMovies}
                  setInputdisabled={setInputdisabled}
                />
                <Footer />
              </ProtectedRoute>
            }
          />

          <Route
            path="/saved-movies"
            children={
              <ProtectedRoute loggedIn={loggedIn}>
                <SavedMovies
                  setFilterSaveMovies={setFilterSaveMovies}
                  filterSaveMovies={filterSaveMovies}
                  setSaveMovies={setSaveMovies}
                  onDeleteMovie={handleDeleteMovie}
                  saveMovies={saveMovies}
                  setInputdisabled={setInputdisabled}
                  inputdisabled={inputdisabled}
                />
                <Footer />
              </ProtectedRoute>
            }
          />

          <Route path="/signup">
            {!loggedIn ? (
              <Register
                title="Добро пожаловать!"
                buttonText="Зарегистрироваться"
                onRegister={handleSubmitRegister}
                errorServer={errorServer}
                inputdisabled={inputdisabled}
              />) : (<Redirect to="/movies" />)
            } </Route>

          <Route path="/signin">
            {!loggedIn ? (
              <Login
                title="Рады видеть!"
                buttonText="Войти"
                onLogin={handleSubmitAuthorize}
                errorServer={errorServer}
                inputdisabled={inputdisabled}
              />) : (<Redirect to="/movies" />)
            } </Route>

          <Route
            path="/profile"
            children={
              <ProtectedRoute loggedIn={loggedIn}>
                <Profile
                  onUpdateUser={handleUpdateUser}
                  errorServer={errorServer}
                  onExit={handleExit}
                />
              </ProtectedRoute>
            }
          />

          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <Menu
          isOpenMenu={isOpenMenu}
          onCloseMenu={handleOpenMenuClick}
        />
      </CurrentUserContext.Provider>
    </>
  )
}
export default App;
