import CurrentUserContext from "contexts/CurrentUserContext";
import React, { useContext } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {

  const currentUser = useContext(CurrentUserContext);

  return (
    <PopupWithForm
      title={"Обновить аватар"}
      name={"avatar"}
      button={"Сохранить"}
      isOpen={props.isEditAvatarPopupOpen}
      onClose={props.closeAllPopups}>
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

  )
}

export default EditAvatarPopup;