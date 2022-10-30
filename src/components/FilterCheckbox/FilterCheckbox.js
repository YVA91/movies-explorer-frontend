import './FilterCheckbox.css';

function FilterCheckbox({filterCheckbox}) {
  
  return (
    <section className="checkbox">
      <input className="checkbox__button" type="checkbox" id="switch" onClick={filterCheckbox}/>
      <label className="checkbox__button-switch" htmlFor="switch"></label>
      <p className="checkbox__text">Короткометражки</p>
    </section>
  );
}

export default FilterCheckbox;