import './MoviesCard.css'

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
      <button className='moviescard__button'>Сохранить</button>
    </section>
  );
}

export default MoviesCard;