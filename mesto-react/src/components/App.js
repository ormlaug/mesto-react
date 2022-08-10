import React from 'react';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import PopupWithForm from './PopupWithForm';

function App() {

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
  }

  return (
    <div className="page__container">
      <Header />

      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        isEditProfilePopupOpen={isEditProfilePopupOpen}
        isAddPlacePopupOpen={isAddPlacePopupOpen}
        isEditAvatarPopupOpen={isEditAvatarPopupOpen}
      />

      <Footer />

      <PopupWithForm
        title="Редактировать профиль"
        name="edit-form"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        >
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
        </div>
      </>

      <PopupWithForm
      title={"Новое место"}
      name={"add-form"}
      isOpen={isAddPlacePopupOpen}
      >
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
      </>

      <ImagePopup />

      <PopupWithForm
      title={"Обновить аватар"}
      name={"avatar-form"}
      isOpen={isEditAvatarPopupOpen}
      >
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
      </>

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
