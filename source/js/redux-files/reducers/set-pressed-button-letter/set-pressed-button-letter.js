import { SET_PRESSED_LETTER } from '../../action-names/action-names';

export default function setPressedButtonLetter(state = null, { type, letterID }) {
  switch (type) {
    case SET_PRESSED_LETTER:
      return letterID;
    default:
      return state;
  }
}
