(function () {
  const gameHeader = document.querySelector('.game-header');
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

  let renderTimer = {
    timerID: null,
    timer: null,
    setTimer() {
      this.timer = document.createElement('span');
      this.timer.textContent = 0;
      this.timer.style = 'position: absolute; left: -10%; top: 0;';
      document.querySelector('.game-main').prepend(this.timer);
      this.timerID = setInterval(() => this.timer.textContent++, 1000);
    },
    stopTimer() {
      clearInterval(this.timerID);
      this.timer.textContent = this.timer.textContent + 's';
    },
  }

  function renderLetterCells() {
    if (!document.querySelector('.play-area__hidden-word-list')) {
      let randomWord = wordArray[Math.floor(Math.random() * wordArray.length)].toUpperCase();
      gameInfoObj.word = randomWord;
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
      renderTimer.setTimer();
    }
  }

  startGameButton.addEventListener('click', renderLetterList);

  //Game code

  function setLinkListener() {
    document.querySelector('.game-header__result-link-reload').addEventListener('click', function(evt) {
      evt.preventDefault();
      document.location.reload(true);
    });
  }

  function musicalAccompaniment(text) {
    let audio = document.querySelector('.audio-answer');
    console.log(audio);
    audio.volume = 0.4;
    switch(text) {
      case 'Вы проиграли.':
        audio.src = '../music/lolYouDied.mp3';
        break;
      case 'wrong answer':
        audio.src = '../music/wrong.mp3';
        break;
      case 'right answer':
        audio.src = '../music/correct.mp3';
        break;
      case 'Вы выиграли.':
        audio.src = '../music/win.mp3';
        break;
    }
    audio.play();
  }

  function disableAllButton() {
    let collectionButton = document.querySelectorAll('.play-area__letter-list-button');
    for (let key of collectionButton) {
      key.disabled = true;
    }
  }

  function createLinkResult() {
    let reloadLink = document.createElement('a');
    reloadLink.classList.add('game-header__result-link-reload');
    reloadLink.setAttribute('href', '#');
    reloadLink.style = 'position: absolute; bottom: -28%; right: 33%; font-size: 24px; color: rgb(163, 21, 12);';
    return reloadLink;
  }

  function checkClass(elementCollection, classContain) {
    for (let element of elementCollection) {
      if (element.classList.contains(classContain)) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  }

  function checkCell(cellCollection) {
    for (let word of cellCollection) {
      if (word.textContent) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  }

  function renderResult() {
    if (checkCell(document.querySelectorAll('.play-area__hidden-word-list-item'))) {
      let reloadLink = createLinkResult();
      reloadLink.textContent = 'Вы выиграли. Нажмите сюда, чтобы поиграть еще.';
      gameHeader.append(reloadLink);
      disableAllButton();
      renderTimer.stopTimer();
      setLinkListener();
      musicalAccompaniment('Вы выиграли.');
    }
    if (checkClass(document.querySelectorAll('.play-area__attempts-left-health'), 'play-area__attempts-left-health--lost-life')) {
      let reloadLink = createLinkResult();
      reloadLink.textContent = 'Вы проиграли. Нажмите сюда, чтобы поиграть еще.';
      gameHeader.append(reloadLink);
      disableAllButton();
      renderTimer.stopTimer();
      setLinkListener();
      musicalAccompaniment('Вы проиграли.');
    }
  }

  function invalidLetter() {
    for (let i = 0; i < healthBar.length; i++) {
      if (!healthBar[i].classList.contains('play-area__attempts-left-health--lost-life')) {
        healthBar[i].classList.add('play-area__attempts-left-health--lost-life');
        healthBar[i].style = 'fill: #000000';
        humanFigure.children[i].style = 'display: block';
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
          musicalAccompaniment('right answer');
        } else if (rightLetter === false && i === gameInfoObj.word.length - 1) {
          invalidLetter();
          musicalAccompaniment('wrong answer');
        }
      }
      target.disabled = true;
    }
    renderResult();
  }

  letterListContainer.addEventListener('click', buttonLetterHandler);

})();
