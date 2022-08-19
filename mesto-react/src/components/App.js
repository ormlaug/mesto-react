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

      <ImagePopup />

      <PopupWithForm
        title={"Редактировать профиль"}
        name={"edit"}>
          <div className="form__container">
              <input
                minLength="2"
                maxLength="40"
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
                maxLength="200"
                id="about"
                name="about"
                type="text"
                class="form__item form__item_el_text"
                placeholder="О себе"
                required
              />
              <span className="form__error" id="about-error"></span>
            </div>
      </PopupWithForm>

      <PopupWithForm
        title={"Новое место"}
        name={"add"}>
          <div className="form__container">
            <input
              minLength="2"
              maxLength="30"
              id="place"
              name="place"
              type="text"
              class="form__item form__item_el_card-name"
              placeholder="Название"
              required />
            <span className="form__error" id="place-error"></span>
          </div>
          <div className="form__container">
            <input
              type="url"
              id="link"
              name="link"
              className="form__item form__item_el_link"
              placeholder="Ссылка на картинку"
              required />
            <span className="form__error" id="link-error"></span>
          </div>
        </PopupWithForm>
          
          <PopupWithForm
            title={"Обновить аватар"}
            name={"avatar"}>
              <div className="form__container">
                <input
                  type="url"
                  id="avatar"
                  name="avatar"
                  className="form__item form__item_el_link"
                  placeholder="Ссылка на картинку"
                  required />
                <span className="form__error" id="avatar-error"></span>
              </div>
          </PopupWithForm>
      </div>
  );
}

export default App;
