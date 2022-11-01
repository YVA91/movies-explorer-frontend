import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader'
import FoundNothing from '../FoundNothing/FoundNothing'
import { getCreateMovies } from '../../utils/MoviesApi'
import { useState, useEffect } from 'react';

function Movies({onSaveMovie, loggedIn}) {
  const [filterMovies, setFilterMovies] = useState(JSON.parse(localStorage.getItem('data')));
  const [isNothingFound, setIsNothingFound] = useState(false);
  const [isfilterCheckbox, setIsFilterCheckbox] = useState(false);
  const [isPreloader, setIsPreloader] = useState(false);
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
      localStorage.setItem('text', text)
      setIsPreloader(true)
      setFilterMovies([])
      getCreateMovies()
        .then((movie) => {
          if (isfilterCheckbox) {
            const filter = movie.filter(({ nameRU, duration  }) => nameRU.toLowerCase().includes(text.toLowerCase()) && (duration<=40));
            localStorage.setItem('data',JSON.stringify(filter))
              if (filter == 0) { 
                setIsNothingFound(true)
                setFilterMovies(JSON.parse(localStorage.getItem('data')))
              } else {
                setFilterMovies(JSON.parse(localStorage.getItem('data')))
              setIsNothingFound(false)
              }
        

            } else {
              const filter = movie.filter(({ nameRU}) => nameRU.toLowerCase().includes(text.toLowerCase()));
              localStorage.setItem('data',JSON.stringify(filter))
              if (filter == 0) { 
                setIsNothingFound(true)
                setFilterMovies(JSON.parse(localStorage.getItem('data')))
              } else {
                setFilterMovies(JSON.parse(localStorage.getItem('data')))
              setIsNothingFound(false)
              }
            }
            
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsPreloader(false)
        });
      }
  }


  function filterCheckbox() {
    if(isfilterCheckbox) {
      setIsFilterCheckbox(false)
    } else {
      setIsFilterCheckbox(true)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", function () {
      setTimeout(handleMovieDisplay, 1000);
    });
  }, []);

  const moviesScreen = quantityfilms ()
  function quantityfilms () {
    if (filterMovies===null) {
      return []
    } else {
      return filterMovies.slice(0, movieDisplay);
    }
  }

  return (
    <main>
      <SearchForm 
      searchFilm={handleSearchFilm}/>
      <FilterCheckbox 
      filterCheckbox={filterCheckbox}/>
      <Preloader 
      isPreloader={isPreloader}/>
      <FoundNothing
      isNothingFound={isNothingFound}/>
      <MoviesCardList
        onSaveMovie={onSaveMovie}
        movies={moviesScreen}
        still={handleStill}
        />
    </main>
  );
}
export default Movies;
