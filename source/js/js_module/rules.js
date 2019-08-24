(function () {
  const rulesLink = document.querySelector('.game-header__game-rules-link');
  const rulesPopup = document.querySelector('.game-header__game-rules-popup');

  function openRules(evt) {
    evt.preventDefault();
    if (!rulesPopup.classList.contains('game-header__game-rules-popup--active')) {
      rulesPopup.classList.add('game-header__game-rules-popup--active');
      setTimeout(() => {
        rulesPopup.style = 'opacity: 1';
      }, 500);
    } else {
      rulesPopup.style = 'opacity: 0';
      setTimeout(() => {
        rulesPopup.classList.remove('game-header__game-rules-popup--active');
      }, 1000);
    }
  }

  rulesLink.addEventListener('click', openRules);
})();
