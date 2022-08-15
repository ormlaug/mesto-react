import React from "react";

function PopupWithForm(props) {
  return (
    <div className={`
    popup
    popup_type_${props.name}
    `}>
        <div className="popup__container">
          <button type="button" className="popup__close" aria-label="close"></button>
          <form className="form" name={props.name} noValidate>
            <h2 className="form__heading">{props.title}</h2>
              {props.children}
            <button type="submit" className="form__save-button" aria-label="save"></button>
          </form>
        </div>
      </div>
  )
}

export default PopupWithForm;