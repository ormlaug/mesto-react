import React from "react";
import api from "utils/api";
import Card from "./Card";


function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, cards]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(cards);
        })
        .catch(err => {console.log(err)});
      })

  return (
    <div>
      <section className="profile">
          <div className="profile__avatar"
            onClick={props.onEditAvatar}
            style={{ backgroundImage: `url(${userAvatar})` }}>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button type="button" className="profile__edit-button" aria-label="edit" onClick={props.onEditProfile}></button>
            <p className="profile__text">{userDescription}</p>
          </div>
          <button type="button" className="profile__add-button" aria-label="add" onClick={props.onAddPlace}></button>
        </section>

        <section className="cards">
          <ul className="cards__list">
            {cards.map((card) => {
              return <Card card={card} key={card._id} />
            })}
          </ul>
        </section>
      </div>
  )
}

export default Main;