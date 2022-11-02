import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';

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

      <button type='button' className={`moviescardlist__button ${filterMovies.length<=movieDisplay &&  'moviescardlist__button_visible' }`} onClick={still}>Ещё</button>
    </section>
  );
}

export default MoviesCardList


