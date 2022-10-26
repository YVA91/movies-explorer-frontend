import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader'
import { useState, useEffect } from 'react';

function Movies({ movies }) {

  const [movieDisplay, setMovieDisplay] = useState(() => {
    const width = window.innerWidth
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

  useEffect(() => {
    window.addEventListener("resize", function () {
      setTimeout(handleMovieDisplay, 1000);
    });
  }, []);

  const moviesScreen = movies.slice(0, movieDisplay);

  return (
    <main>
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList
        movies={moviesScreen}
      />
    </main>
  );
}
export default Movies;
