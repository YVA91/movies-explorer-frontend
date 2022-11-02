import './SearchForm.css';
import search from '../../images/icon.png'
import { useState, useEffect } from "react";


function SearchForm({searchFilm, textValue}) {
  const [error, setError] = useState('');
  const [values, setValues] = useState(textValue);
  const [isValid, setIsValid] = useState(true);

  function handleChange (event) {
    setValues(event.target.value);
    setIsValid(event.target.closest("form").checkValidity());
  };
  
  useEffect(() => {
    function closeError(evt) {
      if (evt.key === 'Escape') {
        setError('');
      }
      if (!evt.target.classList.contains('search__form')) {
        setError('');
      }
    }
    if (!isValid) {
        document.addEventListener('keydown', closeError);
        document.addEventListener("mousedown", closeError)
      return () => {
        document.removeEventListener('keydown', closeError);
        document.removeEventListener("mousedown", closeError);
      }
    }
  })

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      searchFilm(values)
  } else {
      setError('Нужно ввести ключевое слово');
  }
  };

  return (
    <section className="search">
      <form className="search_form" onSubmit={handleSubmit} noValidate>
        <img className="search_form-img" src={search} />
        <input className="search_form-input"
          name="search"
          id="search"
          type="text"
          required
          placeholder="Фильм"
          value={values || ''}
          onChange={handleChange}
          />
          <span className="search__form-error">{error}</span>
        <button className="search_form-button" type="submit">Найти</button>
      </form>
    </section>
  );
}

export default SearchForm;