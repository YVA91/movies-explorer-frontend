import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import FoundNothing from '../FoundNothing/FoundNothing';
import Preloader from '../Preloader/Preloader';
import { useState } from 'react';

function SavedMovies({ saveMovies, onDeleteMovie, filterSaveMovies, setFilterSaveMovies }) {
  const [isNothingFound, setIsNothingFound] = useState({ condition: false, text: '', });
  const [isfilterCheckboxSave, setIsFilterCheckboxSave] = useState(JSON.parse(localStorage.getItem('checkboxSave')));
  const [isPreloader, setIsPreloader] = useState(false);
  const [filterMovies, setFilterMovies] = useState(JSON.parse(localStorage.getItem('data')) || []);

  function handleSearchFilm(text) {
    const saveMoviesNew = saveMovies
    if (isfilterCheckboxSave) {
      const filter = saveMoviesNew.filter(({ nameRU, duration }) => nameRU.toLowerCase().includes(text.toLowerCase()) && (duration <= 40));
      setFilterSaveMovies(filter)
      if (filter == 0) {
        setIsNothingFound({ condition: true, text: 'Ничего не найдено', });
      } else {
        setIsNothingFound({ condition: false, text: '', })
      }
    } else {
      const filter = saveMoviesNew.filter(({ nameRU }) => nameRU.toLowerCase().includes(text.toLowerCase()));
      setFilterSaveMovies(filter)
      if (filter == 0) {
        setIsNothingFound({ condition: true, text: 'Ничего не найдено', });
      } else {
        setIsNothingFound({ condition: false, text: '', })
      }
    }
  }

  function filterCheckbox() {

    if (isfilterCheckboxSave) {
      setIsFilterCheckboxSave(false)
    } else {
      setIsFilterCheckboxSave(true)
    }
  }

  return (
    <main>
      <SearchForm
        searchFilm={handleSearchFilm}
        textValue={''}
      />
      <FilterCheckbox
        //isfilterCheckbox={false}
        filterCheckbox={filterCheckbox}
      />
      <Preloader
        isPreloader={isPreloader} />
      <FoundNothing
        isNothingFound={isNothingFound}
      />
      <MoviesCardList
        filterMovies={filterMovies}
        saveMovies={saveMovies}
        movies={filterSaveMovies}
        onDeleteMovie={onDeleteMovie}
      />
    </main>
  );
}
export default SavedMovies;