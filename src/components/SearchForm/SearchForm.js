import './SearchForm.css';
import search from '../../images/icon.png'

function SearchForm() {

    return (
    <section className="search">
        <form className="search_form">
            <img className="search_form-img" src={search}/>
            <input className="search_form-input"
            id="search" 
            type="text" 
            placeholder="Фильм"/>
            <button className="search_form-button">Найти</button>

        </form>
    </section>

    );
}

export default SearchForm;