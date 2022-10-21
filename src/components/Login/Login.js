import AuthForm from '../AuthForm/AuthForm';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import './Login.css'

function Login({ onRegister, title, buttonText}) {
  const { values, handleChange} = useForm({});

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(values.email, values.password);
  }

return (
  <>
    <AuthForm
      nameEmail="email"
      namePassword="password"
      title={title}
      buttonText={buttonText}
      onSubmit={handleSubmit}
      onChange={handleChange}
      emailValue={values.email}
      passwordValue={values.password}
    />
    <div className='formregister'>
      <p className='formregister__item'>Ещё не зарегистрированы?&nbsp;
        <Link to="/signup" className='formregister__item formregister__item_link'>
          Регистрация
        </Link>
      </p>
    </div>
  </>
);
}

export default Login;