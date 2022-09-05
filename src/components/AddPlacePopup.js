import React, { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {

  const nameRef = useRef();
  const linkRef = useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateCard({
      name: nameRef.current.value,
      link: linkRef.current.value
    })
  } 

  return (
    <PopupWithForm
      title={"Новое место"}
      name={"add"}
      button={"Создать"}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}>
        <div className="form__container">
          <input
            minLength={2}
            maxLength={30}
            id="place"
            name="place"
            type="text"
            className="form__item form__item_el_card-name"
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

  )
}

export default AddPlacePopup;