import React from "react";

function ImagePopup(props) {

  if (!props.card) {
    return null;
  }

  const className = `popup popup_type_picture ${props.card ? 'popup_active' : ''}`;

  return (
    <div className={className}>
      <div className="popup__container popup__container_for-picture">
        <button type="button" className="popup__close" aria-label="close" onClick={props.onClose}></button>
        <img className="popup__image"
          src={`${props.card ? props.card.link : ''}`}
        />
        <p className="popup__subtitle">{props.card.name}</p>
      </div>
    </div>
  )
}

export default ImagePopup;