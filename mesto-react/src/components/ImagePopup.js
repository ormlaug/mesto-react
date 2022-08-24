import React from "react";

function ImagePopup(props) {

  return (
    <div className="popup popup_type_picture">
      <div className="popup__container popup__container_for-picture">
        <button type="button" className="popup__close" aria-label="close" onClick={props.onClose}></button>
        <img className="popup__image"
          src={`${props.card ? props.link : ''}`}
        />
        <p className="popup__subtitle">{props.name}</p>
      </div>
    </div>
  )
}

export default ImagePopup;