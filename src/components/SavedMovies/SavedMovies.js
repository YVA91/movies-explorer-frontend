import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import FoundNothing from '../FoundNothing/FoundNothing';
import Preloader from '../Preloader/Preloader';
import * as MainApi from '../../utils/MainApi';
import { useState, useEffect } from 'react';

function SavedMovies({ saveMovies, onDeleteMovie }) {
const [isNothingFound, setIsNothingFound] = useState({condition: false, text: '',});
const [isfilterCheckbox, setIsFilterCheckbox] = useState(JSON.parse(localStorage.getItem('checkboxSave')));
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
      handleMovieDisplay()
      localStorage.setItem('textSave', text)
      setIsNothingFound({condition: false, text: '',})
      setIsPreloader(true)
      setFilterMovies([])
      getCreateMovies()
        .then((movie) => {
          if (isfilterCheckbox) {
            const filter = saveMovies.filter(({ nameRU, duration  }) => nameRU.toLowerCase().includes(text.toLowerCase()) && (duration<=40));
            localStorage.setItem('dataSave',JSON.stringify(filter))
              if (filter == 0) { 
                setIsNothingFound({condition: true, text: 'Ничего не найдено',});
                setSaveMovies(JSON.parse(localStorage.getItem('dataSave')))
              } else {
                setSaveMovies(JSON.parse(localStorage.getItem('dataSave')))
                setIsNothingFound({condition: false, text: '',})
              }
            } else {
              const filter = saveMovies.filter(({ nameRU}) => nameRU.toLowerCase().includes(text.toLowerCase()));
              localStorage.setItem('dataSave',JSON.stringify(filter))
              if (filter == 0) { 
                setIsNothingFound({condition: true, text: 'Ничего не найдено',});
                setFilterMovies(JSON.parse(localStorage.getItem('dataSave')))
              } else {
                setFilterMovies(JSON.parse(localStorage.getItem('dataSave')))
                setIsNothingFound({condition: false, text: '',})
              }
            }
        })
        .catch((err) => {
          setIsNothingFound({condition: true, text: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз',});
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
        localStorage.setItem('checkboxSave', JSON.stringify(false))
      } else {
        setIsFilterCheckbox(true)
        localStorage.setItem('checkboxSave', JSON.stringify(true))
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
   //   filter={filter}
   />
      <FilterCheckbox 
     // filterCheckbox={filterCheckbox}
     />
      <Preloader 
      isPreloader={isPreloader}/>
      <FoundNothing
      isNothingFound={isNothingFound}
     />
      <MoviesCardList
        onDeleteMovie={onDeleteMovie}
       // movies={moviesScreen}
      />
    </main>
  );
}
export default SavedMovies;