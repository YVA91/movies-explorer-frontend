import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';
import { Route } from 'react-router-dom';

function MoviesCardList({ movies, still, onSaveMovie, onDeleteMovie, filterMovies, movieDisplay, saveMovies }) {

  return (
    <section className='moviescardlist'>
      <div className='moviescardlist__container'>
        {movies.map((movie) => {
          return (
            <MoviesCard
              saveMovies={saveMovies}
              onSaveMovie={onSaveMovie}
              onDeleteMovie={onDeleteMovie}
              key={movie.id || movie._id}
              movie={movie}
            />)
          })
        }
      </div>
      <Route exact path="/movies">
      <button type='button' className={`moviescardlist__button ${filterMovies.length<=movieDisplay &&  'moviescardlist__button_visible' }`} onClick={still}>Ещё</button>
      </Route>
    </section>
  );
}

export default MoviesCardList


