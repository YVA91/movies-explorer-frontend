import './MoviesCard.css'
import { Route } from 'react-router-dom';

function MoviesCard({ movie, onSaveMovie, onDeleteMovie, saveMovies }) {
  const isSaveMovie = saveMovies.some((m) => m.movieId === movie.id);

  function text() {
    const time = movie.duration.toString().split('').pop()
    if (time == 1) { return 'минута' }
    else if ((time == 2) || (time == 3) || (time == 4)) { return 'минуты' }
    else { return 'минут' }
  }

function actionWithMovie() {
  if(!isSaveMovie) {
    onSaveMovie(movie)
  } else {
   onDeleteMovie(saveMovies.filter((m) => m.movieId === movie.id)[0])
  }
}


  return (
    <section className='moviescard'>
      <div className='moviescard__title'>
        <h2 className='moviescard__title-text'>{movie.nameRU}</h2>
        <p className='moviescard__title-time'>{`${movie.duration} ${text()}`}</p>
      </div>
      <a className='moviescard__img-link' href={movie.trailerLink} target="_blank">
        <Route exact path="/movies">
          <img className='moviescard__img' src={`https://api.nomoreparties.co${movie.image.url}`} alt={movie.nameRU} />
        </Route>
        <Route exact path="/saved-movies">
          <img className='moviescard__img' src={movie.image} alt={movie.nameRU} />
        </Route>
      </a>
      <Route exact path="/movies">
        <button className={`moviescard__button ${isSaveMovie ? 'moviescard__button_save' : '' }`} type="button" 
        onClick={actionWithMovie}>{isSaveMovie ? '' : 'Сохранить' }</button>
  


      </Route>
      <Route exact path="/saved-movies">
        <button className='moviescard__button moviescard__button_delete' type="button" ></button>
      </Route>
    </section>
  );
}

export default MoviesCard;