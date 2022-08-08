import React from 'react';
import { Header } from './Header';

function App() {
  return (
    <div className="page__container">
      <Header />

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

      <footer className="footer">
        <p className="footer__copyright">&copy; 2022 Mesto Russia</p>
      </footer>
    </div>
  );
}

export default App;
