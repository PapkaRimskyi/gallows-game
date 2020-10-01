import { SET_HIDDEN_WORD } from '../../action-names/action-names';

export default function setHiddenWord(randomWord) {
  return {
    type: SET_HIDDEN_WORD,
    randomWord,
  };
}
