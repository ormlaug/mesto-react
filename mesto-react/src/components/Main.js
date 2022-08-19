import React from "react";
import api from "utils/api";


function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  React.useEffect(() => {
    api.getUserInfo()
      .then((user) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
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

          </ul>
        </section>
      </div>
  )
}

export default Main;