import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader'
import FoundNothing from '../FoundNothing/FoundNothing'
import { getCreateMovies } from '../../utils/MoviesApi'
import { useState, useEffect } from 'react';

function Movies({ onSaveMovie, loggedIn, saveMovies, onDeleteMovie, inputdisabled, setInputdisabled}) {
  const [filterMovies, setFilterMovies] = useState(JSON.parse(localStorage.getItem('data')) || []);
  const [isNothingFound, setIsNothingFound] = useState({ condition: false, text: '', });
  const [isfilterCheckbox, setIsFilterCheckbox] = useState(JSON.parse(localStorage.getItem('checkbox')) || false);
  const [isPreloader, setIsPreloader] = useState(false);
  const valueMovies = localStorage.getItem(`text`)
  const width = window.innerWidth
  const [movieDisplay, setMovieDisplay] = useState(() => {
    if (width < 480) {
      return 5;
    } else if (width < 768) {
      return 8;
    } else if (width > 768) {
      return 12;
    }
  });

  useEffect(() => {
    window.addEventListener("resize", function () {
      setTimeout(handleMovieDisplay, 1000);
    });
  }, []);

  function handleMovieDisplay() {
    const width = window.innerWidth
    if (width < 480) {
      setMovieDisplay(5);
    } else if (width < 768) {
      setMovieDisplay(8);
    } else if (width > 768) {
      setMovieDisplay(12);
    }
  }

  function handleStill() {
    if (width < 480) {
      setMovieDisplay(movieDisplay + 1);
    } else if (width < 768) {
      setMovieDisplay(movieDisplay + 2);
    } else if (width > 768) {
      setMovieDisplay(movieDisplay + 3);
    }
  }

  function handleSearchFilm(text) {
    if (loggedIn) {
      setInputdisabled(false)
      handleMovieDisplay()
      localStorage.setItem('text', text)
      setIsNothingFound({ condition: false, text: '', })
      setIsPreloader(true)
      setFilterMovies([])
      getCreateMovies()
        .then((movie) => {
          if (JSON.parse(localStorage.getItem('checkbox'))) {
            const filter = movie.filter(({ nameRU, duration }) => nameRU.toLowerCase().includes(text.toLowerCase()) && (duration <= 40));
            localStorage.setItem('data', JSON.stringify(filter))
            if (filter == 0) {
              setIsNothingFound({ condition: true, text: '???????????? ???? ??????????????', });
              setFilterMovies(JSON.parse(localStorage.getItem('data')))
            } else {
              setFilterMovies(JSON.parse(localStorage.getItem('data')))
              setIsNothingFound({ condition: false, text: '', })
            }
          } else {
            const filter = movie.filter(({ nameRU }) => nameRU.toLowerCase().includes(text.toLowerCase()));
            localStorage.setItem('data', JSON.stringify(filter))
            if (filter == 0) {
              setIsNothingFound({ condition: true, text: '???????????? ???? ??????????????', });
              setFilterMovies(JSON.parse(localStorage.getItem('data')))
            } else {
              setFilterMovies(JSON.parse(localStorage.getItem('data')))
              setIsNothingFound({ condition: false, text: '', })
            }
          }
        })
        .catch((err) => {
          setIsNothingFound({ condition: true, text: '???? ?????????? ?????????????? ?????????????????? ????????????. ????????????????, ???????????????? ?? ?????????????????????? ?????? ???????????? ????????????????????. ?????????????????? ?????????????? ?? ???????????????????? ?????? ??????', });
          console.log(err);
        })
        .finally(() => {
          setIsPreloader(false)
          setInputdisabled(true)
        });
    }
  }

  function filterCheckbox() {
    setIsFilterCheckbox(!isfilterCheckbox)
    localStorage.setItem('checkbox', JSON.stringify(!isfilterCheckbox))
    if (valueMovies != null) {
      handleSearchFilm(localStorage.getItem(`text`))
    }
  }

  const moviesScreen = quantityfilms()
  function quantityfilms() {
    if (filterMovies === null) {
      return []
    } else {
      return filterMovies.slice(0, movieDisplay);
    }
  }

  return (
    <main>
      <SearchForm
        searchFilm={handleSearchFilm}
        textValue={valueMovies}
        inputdisabled={inputdisabled}
      />
      <FilterCheckbox
        setIsFilterCheckbox={setIsFilterCheckbox}
        isfilterCheckbox={isfilterCheckbox}
        filterCheckbox={filterCheckbox}
        inputdisabled={inputdisabled} />
      <Preloader
        isPreloader={isPreloader} />
      <FoundNothing
        isNothingFound={isNothingFound} />
      <MoviesCardList
        saveMovies={saveMovies}
        onSaveMovie={onSaveMovie}
        onDeleteMovie={onDeleteMovie}
        movies={moviesScreen}
        still={handleStill}
        filterMovies={filterMovies}
        movieDisplay={movieDisplay}
      />
    </main>
  );
}
export default Movies;
