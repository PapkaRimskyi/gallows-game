(function () {
  const letterListContainer = document.querySelector('.play-area__letter-list-container');
  const startGameButton = document.querySelector('.game-header__start-game');
  const healthBar = document.querySelectorAll('.play-area__attempts-left-health');
  const humanFigure = document.querySelector('.play-area__human-figure');
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

  function setHiddenHumanElements() {
    for (let i = 0; i < humanFigure.children.length; i++) {
      humanFigure.children[i].style = 'display: none';
    }
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
      setHiddenHumanElements();
    }
  }

  startGameButton.addEventListener('click', renderLetterList);

  //Game code

  // function gameEnd(index, healthIndex) {
  //   if (index === healthIndex - 1) {
  //     let divEndGame = document.createElement('div');
  //     divEndGame.style = 'position: absolute; background-color: #ffffff; z-index: 100; box-shadow: 1px 0 4px 6px #000000;';
  //     divEndGame.textContent = 'Вы проиграли';
  //     document.body.append(divEndGame);
  //   }
  // }

  function invalidLetter() {
    for (let i = 0; i < healthBar.length; i++) {
      if (!healthBar[i].classList.contains('play-area__attempts-left-health--lost-life')) {
        healthBar[i].classList.add('play-area__attempts-left-health--lost-life');
        healthBar[i].style = 'fill: #000000';
        humanFigure.children[i].style = 'display: block';
        if (i === healthBar.length - 1) {
          let divEndGame = document.createElement('div');
          divEndGame.style = 'position: absolute; top: 31%; right: 36%; padding: 118px 20px; width: 500px; height: 300px; font-size: 50px; line-height: 50px; text-align: center; background-color: #ffffff; z-index: 100; box-shadow: 1px 0 30px 3px rgba(#000000, 0.44);';
          divEndGame.textContent = 'Вы проиграли';
          document.body.append(divEndGame);
        }
        break;
      }
    }
  }

  function buttonLetterHandler(evt) {
    let target = evt.target;
    let hiddenWordCell = document.querySelectorAll('.play-area__hidden-word-list-item');
    if (target.tagName === 'BUTTON') {
      let rightLetter = false;
      for (let i = 0; i < gameInfoObj.word.length; i++) {
        if (target.textContent === gameInfoObj.word[i]) {
          rightLetter = true;
          hiddenWordCell[i].textContent = target.textContent;
        } else if (rightLetter === false && i === gameInfoObj.word.length - 1) {
          invalidLetter();
        }
      }
      target.disabled = true;
    }
  }

  letterListContainer.addEventListener('click', buttonLetterHandler);

})();
