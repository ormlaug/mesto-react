import CurrentUserContext from "contexts/CurrentUserContext";
import React, { useContext } from "react";

function Card(props) {
  const cardData = useContext(CurrentUserContext);
  const { name, link, likes, _id } = cardData;

  const isOwn = cardData.owner._id === _id;

  const cardDeleteButtonClassName = (
    `cards__delete-button ${isOwn ? 'cards__delete-button' : 'cards__delete-button_inactive'}`
  );

  const isLiked = likes.some(i => i._id === _id);
  const cardLikeButtonClassName = `cards__like-button ${isLiked ? 'cards__like-button_active' : ''}`; 


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
      <button type="button" className={cardDeleteButtonClassName} aria-label="delete"></button>
      <div className="cards__info">
        <h2 className="cards__title">{name}</h2>
        <div>
          <button type="button" className={cardLikeButtonClassName} aria-label="like"></button>
          <p className="cards__likes-number">{likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;