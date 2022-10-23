import './Profile.css'

function Profile() {

  return (
    <section className='profile'>
      <form className='profile__form'>
        <h2 className='profile__title'>Привет, Виталий!</h2>
        <label className="profile__field">
          <p className="profile__field-signature">Имя</p>
          <input
            className="profile__field-item"
            id="name"
            type="text"
            required
            minLength="2"
          />
        </label>
        <span className="popup__field-item-error" id="title-error"></span>
        <label className="profile__field">
          <p className="profile__field-signature">E-mail</p>
          <input
            className="profile__field-item"
            id="email"
            type="email"
            required
            minLength="2"
          />
        </label>
        <span className="popup__field-item-error" id="link-error"></span>
        <div className="profile__button-container">
          <button className="profile__button" type="submit" aria-label="Редактировать">Редактировать</button>
          <button className="profile__button" type="submit" aria-label="Выйти из аккаунта">Выйти из аккаунта</button>
        </div>
      </form>
    </section>
  );
}

export default Profile;