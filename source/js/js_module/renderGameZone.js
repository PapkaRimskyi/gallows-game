(function () {
  const letterListContainer = document.querySelector('.play-area__letter-list-container');
  const startGameButton = document.querySelector('.game-header__start-game');
  const healthBar = document.querySelectorAll('.play-area__attempts-left-health');
  const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
  const wordArray = ['дружба', 'пляж', 'солнце', 'луна', 'спутник', 'механизм', 'человек'];
  const gameInfoObj = {};

  //Game zone render code

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
      renderLetterCells();
      startGameButton.disabled = true;
    }
    console.log(gameInfoObj.word);
  }

  function renderLetterCells() {
    if (!document.querySelector('.play-area__hidden-word-list')) {
      let randomWord = wordArray[Math.floor(Math.random() * wordArray.length)].toUpperCase();
      gameInfoObj.word = randomWord;
      gameInfoObj.attempts = [true, true, true, true, true, true];
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

  startGameButton.addEventListener('click', renderLetterList);

  //Game code

  function buttonLetterHandler(evt) {
    let target = evt.target;
    let hiddenWordCell = document.querySelectorAll('.play-area__hidden-word-list-item');
    if (target.tagName === 'BUTTON') {
      for (let i = 0; i < gameInfoObj.word.length; i++) {
        if (target.textContent === gameInfoObj.word[i]) {
          hiddenWordCell[i].textContent = target.textContent;
        }
      }
      target.disabled = true;
    }
  }

  letterListContainer.addEventListener('click', buttonLetterHandler);

})();
