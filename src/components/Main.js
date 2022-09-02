import CurrentUserContext from "contexts/CurrentUserContext";
import React, { useContext } from "react";
import api from "utils/api";
import Card from "./Card";


function Main(props) {
  const [cards, setCards] = React.useState([]);

  const currentUser = useContext(CurrentUserContext);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

function handleCardDelete(card) {
  api.deleteCard(card._id).then(setCards((state) => state.filter((c) => c._id !== card.owner._id )))
  }

  return (
    <div>
      <section className="profile">
          <div className="profile__avatar"
            onClick={props.onEditAvatar}
            style={{ backgroundImage: `url(${currentUser?.avatar})` }}>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{currentUser?.name}</h1>
            <button type="button" className="profile__edit-button" aria-label="edit" onClick={props.onEditProfile}></button>
            <p className="profile__text">{currentUser?.about}</p>
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
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
              />
            })}
          </ul>
        </section>
      </div>
  )
}

export default Main;