import { SET_PRESSED_LETTER } from '../../action-names/action-names';

export default function setPressedButtonLetter(letterID) {
  return {
    type: SET_PRESSED_LETTER,
    letterID,
  };
}
