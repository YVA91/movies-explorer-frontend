import './SearchForm.css';
import search from '../../images/icon.png'
import {useFormWithValidation} from '../../hooks/useFormWithValidation';
import { useState, useEffect } from "react";


function SearchForm({filter}) {
  const {values, handleChange, isValid, } = useFormWithValidation({})
  const [error, setError] = useState('');

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
      filter(values.search)
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
          value={values.search || ''}
          onChange={handleChange}
          />
          <span className="search__form-error">{error}</span>
        <button className="search_form-button" type="submit">Найти</button>
      </form>
    </section>
  );
}

export default SearchForm;