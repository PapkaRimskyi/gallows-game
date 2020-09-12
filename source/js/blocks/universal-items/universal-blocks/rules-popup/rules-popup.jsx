import React from 'react';

export default function RulesPopup() {
  return (
    <section className="rules-popup">
      <h2 className="rules-popup__headline">Правила игры &quot;Виселица&quot;</h2>
      <ol className="rules-popup__rules-list">
        <li className="rules-popup__rules-item">Игра начинается по нажатию на кнопку &quot;Играть&quot;.</li>
        <li className="rules-popup__rules-item">Появятся буквы в алфавитном порядке. За неверно выбранную букву игрок лишается одной жизни (всего их 6).</li>
        <li className="rules-popup__rules-item">Если в слове присутствует выбранная буква - она будет открыта.</li>
      </ol>
    </section>
  );
}
