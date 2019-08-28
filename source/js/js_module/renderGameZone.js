(function () {
  const letterListContainer = document.querySelector('.play-area__letter-list-container');
  const startGameButton = document.querySelector('.game-header__start-game');
  const healthBar = document.querySelectorAll('.play-area__attempts-left-health');
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const wordArray = ['дружба', 'пляж', 'солнце', 'луна', 'спутник', 'механизм', 'человек'];

  function healthColor(color) {
    for (let key of healthBar) {
      key.style = color;
    }
  }

  healthColor('fill: #000000');

  function renderListItem(ulList) {
    let alphabetArray = alphabet.toUpperCase().split('');
    for (let i = 0; i < alphabet.length; i++) {
      let li = document.createElement('li');
      let button = document.createElement('button');
      li.classList.add('play-area__letter-list-item');
      button.classList.add('play-area__letter-list-button');
      button.textContent = alphabetArray[i];
      li.append(button);
      ulList.append(li);
    }
  }

  function renderLetterList(evt) {
    if (!document.querySelector('.play-area__letter-list')) {
      evt.preventDefault();
      let ul = document.createElement('ul');
      ul.classList.add('play-area__letter-list');
      ul.style = 'display: flex; flex-wrap: wrap;';
      renderListItem(ul);
      letterListContainer.append(ul);
    }
    renderLetterCells();
  }

  startGameButton.addEventListener('click', renderLetterList);

  function renderLetterCells() {
    let randomWord = wordArray[Math.floor(Math.random() * wordArray.length)].toUpperCase();
    if (!document.querySelector('.play-area__hidden-word-list')) {
      let ul = document.createElement('ul');
      ul.classList.add('play-area__hidden-word-list');
      for (let i = 0; i < randomWord.length; i++) {
        let li = document.createElement('li');
        li.classList.add('play-area__hidden-word-list-item');
        ul.append(li);
      }
      document.querySelector('.play-area__hidden-word').append(ul);
      healthColor('fill: #d75a4a');
      document.querySelector('.play-area__human-figure').style = 'display: none;';
    }
  }

})();
