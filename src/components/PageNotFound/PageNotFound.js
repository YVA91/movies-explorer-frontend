import './PageNotFound.css'
import { Link } from 'react-router-dom';

function PageNotFound() {

  return (
    <section className='pageNotFound'>
      <h2 className='pageNotFound__title'>404</h2>
      <p className='pageNotFound__subtitle'>Страница не найдена</p>
      <Link className='pageNotFound__exit' to="/">Назад</Link>
    </section>
  );
}

export default PageNotFound;