import './FilterCheckbox.css';

function FilterCheckbox({filterCheckbox, isfilterCheckbox, inputdisabled}) {

  return (
    <section className="checkbox">
      <input className="checkbox__button" type="checkbox" id="switch" disabled={inputdisabled ? false : true} onChange={filterCheckbox} checked={(isfilterCheckbox===null) ? false : isfilterCheckbox} />
      <label className="checkbox__button-switch" htmlFor="switch"></label>
      <p className="checkbox__text">Короткометражки</p>
    </section>
  );
}

export default FilterCheckbox;