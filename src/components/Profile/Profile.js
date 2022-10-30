import './Profile.css'
import { useContext, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import {useFormWithValidation} from '../../hooks/useFormWithValidation'

function Profile({onUpdateUser, errorServer, onExit}) {
  const {values, handleChange, errors, isValid, resetForm } = useFormWithValidation({})
  const currentUser = useContext(CurrentUserContext);
  
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser(values.email, values.name)
  }

  function handleExit() {
    onExit()
  }

  return (
    <section className='profile'>
      <form className='profile__form' onSubmit={handleSubmit} noValidate>
        <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
        <label className="profile__field">
          <p className="profile__field-signature">Имя</p>
          <input
            className="profile__field-item"
            id="name"
            type="text"
            name="name"
            required
            minLength="2"
            placeholder={currentUser.name}
            value={values.name || ""}
            onChange={handleChange}
          />
        </label>
        <span className="popup__field-item-error" id="title-error">{errors.name}</span>
        <label className="profile__field">
          <p className="profile__field-signature">E-mail</p>
          <input
            className="profile__field-item"
            id="email"
            type="email"
            name="email"
            required
            minLength="2"
            placeholder={currentUser.email}
            value={values.email || ""}
            onChange={handleChange}
          />
        </label>
        <span className="popup__field-item-error" id="link-error">{errors.email}</span>
        <div className="profile__button-container">
          <span className="popup__field-item-error" id="link-error">{errorServer}</span>
          <button className={`profile__button ${!isValid || (values.name==currentUser.name) || (values.email==currentUser.email)? 'profile__button_disabled' : ''}`} disabled={!isValid || (values.name==currentUser.name) || (values.email==currentUser.email)} type="submit" aria-label="Редактировать">Редактировать</button>
          <button className="profile__button" type="button" onClick={handleExit} aria-label="Выйти из аккаунта">Выйти из аккаунта</button>
        </div>
      </form>
    </section>
  );
}

export default Profile;