import CurrentUserContext from "contexts/CurrentUserContext";
import React, { useContext } from "react";

function Card(props) {
  const cardData = useContext(CurrentUserContext);
  const { name, link, likes } = cardData;


  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="cards__item"
      onClick={handleClick}>
      <img className="cards__photo"
        src={link}
        alt={name}
      />
      <button type="button" className="cards__delete-button" aria-label="delete"></button>
      <div className="cards__info">
        <h2 className="cards__title">{name}</h2>
        <div>
          <button type="button" className="cards__like-button" aria-label="like"></button>
          <p className="cards__likes-number">{likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;