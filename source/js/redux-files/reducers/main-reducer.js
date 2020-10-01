import { combineReducers } from 'redux';

import setHiddenWord from './set-hidden-word/set-hidden-word';
import lifesControl from './lifes-control/lifes-control';
import setFinalTime from './set-final-time/set-final-time';
import setPressedButtonLetter from './set-pressed-button-letter/set-pressed-button-letter';
import setCountWords from './set-count-words/set-count-words';

export default combineReducers(
  {
    hiddenWord: setHiddenWord,
    lifes: lifesControl,
    finalTime: setFinalTime,
    pressedLetterID: setPressedButtonLetter,
    countWords: setCountWords,
  },
);
