import { connect } from 'react-redux';

import setHiddenWord from '../../../../redux-files/actions/set-hidden-word/set-hidden-word';
import { changeLife, restoreLife } from '../../../../redux-files/actions/lifes-control/lifes-control';
import setFinalTime from '../../../../redux-files/actions/set-final-time/set-final-time';
import setPressedButtonLetter from '../../../../redux-files/actions/set-pressed-button-letter/set-pressed-button-letter';
import setCountWords from '../../../../redux-files/actions/set-count-words/set-count-words';

import PlayArea from './play-area';

function mapStateToProps(state) {
  return {
    hiddenWord: state.hiddenWord,
    lifes: state.lifes,
    finalTime: state.finalTime,
    pressedLetterID: state.pressedLetterID,
    countWords: state.countWords,
  };
}

const mapDispatchToProps = {
  setHiddenWord,
  changeLifesLeft: changeLife,
  restoreAllLife: restoreLife,
  setFinalTime,
  setPressedLetter: setPressedButtonLetter,
  setCountWords,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayArea);
