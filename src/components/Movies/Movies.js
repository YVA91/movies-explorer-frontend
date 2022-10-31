import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader'
import FoundNothing from '../FoundNothing/FoundNothing'
import { useState, useEffect } from 'react';

function Movies({ movies, isPreloader, onSaveMovie}) {
  const [filterMovies, setFilterMovies] = useState([]);
  const [isNothingFound, setIsNothingFound] = useState(false);
  const [isfilterCheckbox, setIsFilterCheckbox] = useState(false);
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


  function filter (text) {
    if (isfilterCheckbox) {
    const filter = movies.filter(({ nameRU, duration  }) => nameRU.toLowerCase().includes(text.toLowerCase()) && (duration<=40));
      if (filter == 0) { 
        setIsNothingFound(true)
        setFilterMovies(filter)
      } else {
      setFilterMovies(filter)
      setIsNothingFound(false)
      }
    } else {
      const filter = movies.filter(({ nameRU}) => nameRU.toLowerCase().includes(text.toLowerCase()));
      if (filter == 0) { 
        setIsNothingFound(true)
        setFilterMovies(filter)
      } else {
      setFilterMovies(filter)
      setIsNothingFound(false)
      }
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

  const moviesScreen = filterMovies.slice(0, movieDisplay);

  return (
    <main>
      <SearchForm 
      filter={filter}/>
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
