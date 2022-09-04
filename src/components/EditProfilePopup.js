import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {

  return (
    <PopupWithForm
      title={"Редактировать профиль"}
      name={"edit"}
      button={"Сохранить"}
      isOpen={props.isOpen}
      onClose={props.onClose}>
        <div className="form__container">
            <input
              minLength={2}
              maxLength={40}
              id="name"
              name="name"
              type="text"
              className="form__item form__item_el_name"
              placeholder="Имя"
              required
            />
            <span className="form__error" id="name-error"></span>
          </div>
          <div className="form__container">
            <input
              minLength={2}
              maxLength={200}
              id="about"
              name="about"
              type="text"
              className="form__item form__item_el_text"
              placeholder="О себе"
              required
            />
            <span className="form__error" id="about-error"></span>
          </div>
    </PopupWithForm>
    )
}

export default EditProfilePopup;