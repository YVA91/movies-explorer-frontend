import './AuthForm.css';
import { Route } from 'react-router-dom';

function AuthForm({ onSubmit, title, nameEmail, emailValue, namePassword, passwordValue, onChange, buttonText }) {
  return (
    <form className='authform' onSubmit={onSubmit}>
      <h2 className='authform__title'>{title}</h2>
      <Route exact path="/signup">
        <label className="authform__field">
          <span className="authform__field-signature">Имя</span>
          <input
            className="authform__field-item"
            id="name"
            type="text"
            required
            minLength="2"
            placeholder=""
          />
          <span className="authform__field-item-error" id="title-error"></span>
        </label>
      </Route>
      <label className="authform__field">
        <span className="authform__field-signature">E-mail</span>
        <input
          className="authform__field-item"
          id="email"
          type="email"
          required
          minLength="2"
          placeholder=""
        />
        <span className="authform__field-item-error" id="title-error"></span>
      </label>
      <label className="authform__field">
        <span className="authform__field-signature">Пароль</span>
        <input
          className="authform__field-item"
          id="password"
          type="password"
          required
          minLength="2"
          placeholder=""
        />
        <span className="authform__field-item-error" id="link-error"></span>
      </label>
      <button className="authform__button" type="submit" aria-label={buttonText}>{buttonText}</button>
    </form>
  );
}

export default AuthForm;