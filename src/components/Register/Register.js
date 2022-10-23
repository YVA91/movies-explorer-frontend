import './Register.css'
import AuthForm from '../AuthForm/AuthForm';
import { Link } from 'react-router-dom';

function Register({ onRegister, title, buttonText }) {

  return (
    <>
      <AuthForm
        nameEmail="email"
        namePassword="password"
        title={title}
        buttonText={buttonText}
      />
      <div className='formregister'>
        <p className='formregister__item'>Уже зарегистрированы?&nbsp;
          <Link to="/signin" className='formregister__item formregister__item_link'>
            Войти
          </Link>
        </p>
      </div>
    </>
  );
}

export default Register;