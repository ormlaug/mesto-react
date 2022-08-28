import CurrentUserContext from "contexts/CurrentUserContext";
import React, { useContext } from "react";
import Card from "./Card";


function Main(props) {
  const userData = useContext(CurrentUserContext);
  const { name, about, avatar } = userData;


  return (
    <div>
      <section className="profile">
          <div className="profile__avatar"
            onClick={props.onEditAvatar}
            style={{ backgroundImage: `url(${avatar})` }}>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{name}</h1>
            <button type="button" className="profile__edit-button" aria-label="edit" onClick={props.onEditProfile}></button>
            <p className="profile__text">{about}</p>
          </div>
          <button type="button" className="profile__add-button" aria-label="add" onClick={props.onAddPlace}></button>
        </section>

        <section className="cards">
          <ul className="cards__list">
            {props.cards.map((card) => {
              return <Card
                card={card}
                key={card._id}
                onCardClick={props.onCardClick}
              />
            })}
          </ul>
        </section>
      </div>
  )
}

export default Main;