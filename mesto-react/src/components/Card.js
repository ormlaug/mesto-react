import React from "react";

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="cards__item">
      <img className="cards__photo"
        src={props.card.link}
        alt={props.card.name}
      />
      <button type="button" className="cards__delete-button" aria-label="delete"></button>
      <div className="cards__info">
        <h2 className="cards__title">{props.card.name}</h2>
        <div>
          <button type="button" className="cards__like-button" aria-label="like"></button>
          <p className="cards__likes-number">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;