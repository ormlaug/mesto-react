import React from "react";

function PopupWithForm({ name, isOpen, children, onClose(), title, buttonText }) {

  const className = `popup popup_type_${name} ${isOpen ? "popup_active" : ''}`;

  return (
    <div className={className}
    onClick={() => {onClose()}}>
        <div className="popup__container">
          <button type="button" className="popup__close" aria-label="close" onClick={() => {onClose()}}></button>
          <form className="form" name={name} noValidate>
            <h2 className="form__heading">{title}</h2>
              {children}
            <button type="submit" className="form__save-button" aria-label="save" onClick={() => {onClose()}}>{buttonText}</button>
          </form>
        </div>
      </div>
  )
}

export default PopupWithForm;