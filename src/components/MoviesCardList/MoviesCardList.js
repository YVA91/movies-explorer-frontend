import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies }) {

  return (
    <section className='moviescardlist'>
      <div className='moviescardlist__container'>
        {movies.map((movie) => {
          return (
            <MoviesCard
              key={movie.id}
              movie={movie}
            />)
          })
        }
      </div>
      <button type='button' className='moviescardlist__button'>Ещё</button>
    </section>
  );
}

export default MoviesCardList