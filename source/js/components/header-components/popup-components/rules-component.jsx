import React from 'react';

export default function RulesPopup() {
  return (
    <section className="game-header__game-rules-popup">
      <h2 className="game-header__game-rules-headline">Правила игры &quot;Виселица&quot;</h2>
      <ol className="game-header__game-rules-list">
        <li className="game-header__game-rules-item">Игра начинается по нажатию на кнопку &quot;Играть&quot;.</li>
        <li className="game-header__game-rules-item">Появятся буквы в алфавитном порядке. За неверно выбранную букву игрок лишается одной жизни (всего их 6).</li>
        <li className="game-header__game-rules-item">Если в слове присутствует выбранная буква - она будет открыта.</li>
      </ol>
    </section>
  );
}
