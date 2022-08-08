import React from "react";

function Main() {
  return (
    <div>
      <section className="profile">
          <div className="profile__avatar"></div>
          <div className="profile__info">
            <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button type="button" className="profile__edit-button" aria-label="edit"></button>
            <p className="profile__text">Исследователь океана</p>
          </div>
          <button type="button" className="profile__add-button" aria-label="add"></button>
        </section>

        <section className="cards">
          <ul className="cards__list">
          </ul>
        </section>
      </div>
  )
}

export default Main;