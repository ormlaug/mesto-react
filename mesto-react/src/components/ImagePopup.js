function ImagePopup() {
  return (
    <div className="popup popup_type_picture">
      <div className="popup__container popup__container_for-picture">
        <button type="button" className="popup__close" aria-label="close"></button>
        <img className="popup__image" />
        <p className="popup__subtitle"></p>
      </div>
    </div>
  )
}

export default ImagePopup;