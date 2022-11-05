import './AuthForm.css';
import { Route } from 'react-router-dom';

function AuthForm({ onSubmit, title, buttonText, onChange, emailValue, passwordValue, nameValue, nameName, nameEmail, namePassword, error, isValid, errorServer, inputdisabled}) {

  return (
    <form className='authform' onSubmit={onSubmit} noValidate>
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
            value={nameValue || ""}
            onChange={onChange}
            name={nameName}
            pattern="^[A-Za-zА-Яа-яЁё/s][A-Za-zА-Яа-яЁё /s -]+$"
            disabled={inputdisabled ? false : true}
          />
          <span className="authform__field-item-error">{error.name}</span>
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
          value={emailValue || ""}
          onChange={onChange}
          name={nameEmail}
          pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
          disabled={inputdisabled ? false : true}
        />
        <span className="authform__field-item-error">{error.email}</span>
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
          value={passwordValue || ""}
          onChange={onChange}
          name={namePassword}
          disabled={inputdisabled ? false : true}
        />
        <span className="authform__field-item-error">{error.password}</span>
      </label>
      <span className="authform__button-error">{errorServer}</span>
      <button className={`authform__button ${!isValid && 'authform__button_disabled' }`} disabled={!isValid} type="submit" aria-label={buttonText}>{buttonText}</button>
    </form>
  );
}

export default AuthForm;