import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <div className="page__container">
      <Header />

      <Main />

      <Footer />

      <div className="popup popup_type_edit">
        <div className="popup__container">
          <button type="button" className="popup__close" aria-label="close"></button>
          <form className="form" name="edit-form" action="#" noValidate>
            <h2 className="form__heading">Редактировать профиль</h2>
            <div className="form__container">
              <input
                minLength="2"
                maxlength="40"
                id="name"
                name="name"
                type="text"
                class="form__item form__item_el_name"
                placeholder="Имя"
                required
              />
              <span className="form__error" id="name-error"></span>
            </div>
            <div className="form__container">
              <input
                minLength="2"
                maxlength="200"
                id="about"
                name="about"
                type="text"
                class="form__item form__item_el_text"
                placeholder="О себе"
                required
              />
              <span className="form__error" id="about-error"></span>
            </div>
            <button type="submit" className="form__save-button" aria-label="save">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_add">
        <div className="popup__container">
          <button type="button" className="popup__close" aria-label="close"></button>
          <form className="form" name="add-form" action="#" noValidate>
            <h2 className="form__heading">Новое место</h2>
            <div className="form__container">
              <input
                minLength="2"
                maxlength="30"
                id="place"
                name="place"
                type="text"
                class="form__item form__item_el_card-name"
                placeholder="Название"
                required
              />
              <span className="form__error" id="place-error"></span>
            </div>
            <div className="form__container">
              <input
                type="url"
                id="link"
                name="link"
                className="form__item form__item_el_link"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="form__error" id="link-error"></span>
            </div>
            <button type="submit" className="form__save-button" aria-label="save">Создать</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_picture">
        <div className="popup__container popup__container_for-picture">
          <button type="button" className="popup__close" aria-label="close"></button>
          <img className="popup__image" />
          <p className="popup__subtitle"></p>
        </div>
      </div>

      <div className="popup popup_type_avatar">
        <div className="popup__container popup__container_for-avatar">
          <button type="button" className="popup__close" aria-label="close"></button>
          <form className="form" name="avatar-form" action="#" novalidate>
            <h2 className="form__heading">Обновить аватар</h2>
            <div className="form__container">
              <input
                type="url"
                id="avatar"
                name="avatar"
                className="form__item form__item_el_link"
                placeholder="Ссылка на картинку"
                required
              />
              <span className="form__error" id="avatar-error"></span>
            </div>
            <button type="submit" className="form__save-button" aria-label="save">Сохранить</button>
          </form>
        </div>
      </div>

  <div className="popup popup_type_delete">
    <div className="popup__container popup__container_for-removing">
      <button type="button" className="popup__close" aria-label="close"></button>
      <form className="form" name="confirm-form" action="#" novalidate>
        <h2 className="form__heading">Вы уверены?</h2>
        <button type="submit" className="form__save-button" aria-label="submit">Да</button>
      </form>
    </div>
  </div>

  <template className="template">
    <li className="cards__item">
      <img className="cards__photo" />
      <button type="button" className="cards__delete-button" aria-label="delete"></button>
      <div className="cards__info">
        <h2 className="cards__title"></h2>
        <div>
          <button type="button" className="cards__like-button" aria-label="like"></button>
          <p className="cards__likes-number">0</p>
        </div>
      </div>
    </li>
  </template>
    </div>
  );
}

export default App;
