import './Promo.css';
import promoImg from '../../images/promo.png'

function Promo() {

    return (
    <section className="promo">
        <div className="promo__container">
            <h1 className="promo__text">Учебный проект студента факультета Веб-разработки.</h1>
            <img className="promo__img" src={promoImg} alt="картинка"/>
        </div>
    </section>

    );
}

export default Promo;
