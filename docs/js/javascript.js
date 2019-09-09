"use strict";

(function () {
  var gameHeader = document.querySelector('.game-header');
  var letterListContainer = document.querySelector('.play-area__letter-list-container');
  var startGameButton = document.querySelector('.game-header__start-game');
  var healthBar = document.querySelectorAll('.play-area__attempts-left-health');
  var humanFigure = document.querySelector('.play-area__human-figure');
  var alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
  var wordArray = ['дружба', 'пляж', 'солнце', 'луна', 'спутник', 'механизм', 'человек'];
  var gameInfoObj = {}; //Game zone render code

  function healthColor(color) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = healthBar[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var key = _step.value;
        key.style = color;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  healthColor('fill: #000000');

  function renderListItem(ulList) {
    var alphabetArray = alphabet.toUpperCase().split('');

    for (var i = 0; i < alphabet.length; i++) {
      var li = document.createElement('li');
      var button = document.createElement('button');
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
      var ul = document.createElement('ul');
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
    for (var i = 0; i < humanFigure.children.length; i++) {
      humanFigure.children[i].style = 'display: none';
    }
  }

  var renderTimer = {
    timerID: null,
    timer: null,
    setTimer: function setTimer() {
      var _this = this;

      this.timer = document.createElement('span');
      this.timer.textContent = 0;
      this.timer.style = 'position: absolute; left: -10%; top: 0;';
      document.querySelector('.game-main').prepend(this.timer);
      this.timerID = setInterval(function () {
        return _this.timer.textContent++;
      }, 1000);
    },
    stopTimer: function stopTimer() {
      clearInterval(this.timerID);
      this.timer.textContent = this.timer.textContent + 's';
    }
  };

  function renderLetterCells() {
    if (!document.querySelector('.play-area__hidden-word-list')) {
      var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)].toUpperCase();
      gameInfoObj.word = randomWord;
      var ul = document.createElement('ul');
      ul.classList.add('play-area__hidden-word-list');

      for (var i = 0; i < randomWord.length; i++) {
        var li = document.createElement('li');
        li.classList.add('play-area__hidden-word-list-item');
        ul.append(li);
      }

      document.querySelector('.play-area__hidden-word').append(ul);
      healthColor('fill: #d75a4a');
      setHiddenHumanElements();
      renderTimer.setTimer();
    }
  }

  startGameButton.addEventListener('click', renderLetterList); //Game code

  function setLinkListener() {
    document.querySelector('.game-header__result-link-reload').addEventListener('click', function (evt) {
      evt.preventDefault();
      document.location.reload(true);
    });
  }

  function musicalAccompaniment(text, i, length) {
    var audio = new Audio();
    audio.volume = 0.4;

    switch (text) {
      case 'Вы проиграли.':
        audio.src = '../../music/lolYouDied.mp3';
        break;

      case '':
        if (i !== length) {
          audio.src = '../../music/wrong.mp3';
          break;
        }

        break;

      case 'Вы выиграли.':
        audio.src = '../../music/win.mp3';
        break;
    }

    audio.play();
  }

  function disableAllButton() {
    var collectionButton = document.querySelectorAll('.play-area__letter-list-button');
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = collectionButton[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var key = _step2.value;
        key.disabled = true;
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }

  function createLinkResult() {
    var reloadLink = document.createElement('a');
    reloadLink.classList.add('game-header__result-link-reload');
    reloadLink.setAttribute('href', '#');
    reloadLink.style = 'position: absolute; bottom: -28%; right: 33%; font-size: 24px; color: rgb(163, 21, 12);';
    return reloadLink;
  }

  function checkClass(elementCollection, classContain) {
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = elementCollection[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var element = _step3.value;

        if (element.classList.contains(classContain)) {
          continue;
        } else {
          return false;
        }
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
          _iterator3["return"]();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    return true;
  }

  function checkCell(cellCollection) {
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = cellCollection[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var word = _step4.value;

        if (word.textContent) {
          continue;
        } else {
          return false;
        }
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
          _iterator4["return"]();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }

    return true;
  }

  function renderResult() {
    if (checkCell(document.querySelectorAll('.play-area__hidden-word-list-item'))) {
      var reloadLink = createLinkResult();
      reloadLink.textContent = 'Вы выиграли. Нажмите сюда, чтобы поиграть еще.';
      gameHeader.append(reloadLink);
      disableAllButton();
      renderTimer.stopTimer();
      setLinkListener();
      musicalAccompaniment('Вы выиграли.');
    }

    if (checkClass(document.querySelectorAll('.play-area__attempts-left-health'), 'play-area__attempts-left-health--lost-life')) {
      var _reloadLink = createLinkResult();

      _reloadLink.textContent = 'Вы проиграли. Нажмите сюда, чтобы поиграть еще.';
      gameHeader.append(_reloadLink);
      disableAllButton();
      renderTimer.stopTimer();
      setLinkListener();
      musicalAccompaniment('Вы проиграли.');
    }
  }

  function invalidLetter() {
    for (var i = 0; i < healthBar.length; i++) {
      if (!healthBar[i].classList.contains('play-area__attempts-left-health--lost-life')) {
        healthBar[i].classList.add('play-area__attempts-left-health--lost-life');
        healthBar[i].style = 'fill: #000000';
        humanFigure.children[i].style = 'display: block';
        musicalAccompaniment('', i, healthBar.length - 1);
        break;
      }
    }
  }

  function buttonLetterHandler(evt) {
    var target = evt.target;
    var hiddenWordCell = document.querySelectorAll('.play-area__hidden-word-list-item');

    if (target.tagName === 'BUTTON') {
      var rightLetter = false;

      for (var i = 0; i < gameInfoObj.word.length; i++) {
        if (target.textContent === gameInfoObj.word[i]) {
          rightLetter = true;
          hiddenWordCell[i].textContent = target.textContent;
        } else if (rightLetter === false && i === gameInfoObj.word.length - 1) {
          invalidLetter();
        }
      }

      target.disabled = true;
    }

    renderResult();
  }

  letterListContainer.addEventListener('click', buttonLetterHandler);
})();

(function () {
  var rulesLink = document.querySelector('.game-header__game-rules-link');
  var rulesPopup = document.querySelector('.game-header__game-rules-popup');

  function openRules(evt) {
    evt.preventDefault();

    if (!rulesPopup.classList.contains('game-header__game-rules-popup--active')) {
      rulesPopup.classList.add('game-header__game-rules-popup--active');
      setTimeout(function () {
        rulesPopup.style = 'opacity: 1';
      }, 300);
    } else {
      rulesPopup.style = 'opacity: 0';
      setTimeout(function () {
        rulesPopup.classList.remove('game-header__game-rules-popup--active');
      }, 500);
    }
  }

  rulesLink.addEventListener('click', openRules);
})();