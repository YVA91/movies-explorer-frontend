import './MoviesCard.css'
import { Route } from 'react-router-dom';

function MoviesCard({ movie }) {

  function text() {
    const time = movie.duration.toString().split('').pop()
    if (time == 1) { return 'минута' }
    else if ((time == 2) || (time == 3) || (time == 4)) { return 'минуты' }
    else { return 'минут' }
  }

  return (
    <section className='moviescard'>
      <div className='moviescard__title'>
        <h2 className='moviescard__title-text'>{movie.nameRU}</h2>
        <p className='moviescard__title-time'>{`${movie.duration} ${text()}`}</p>
      </div>
      <img className='moviescard__img' src={`https://api.nomoreparties.co${movie.image.url}`} alt='обложка' />
      <Route exact path="/movies">
        <button className='moviescard__button /*moviescard__button_save*/'>Сохранить</button>
      </Route>
      <Route exact path="/saved-movies">
        <button className='moviescard__button moviescard__button_delete'></button>
      </Route>

    </section>
  );
}

export default MoviesCard;