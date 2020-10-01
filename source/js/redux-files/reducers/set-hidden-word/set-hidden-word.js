import { SET_HIDDEN_WORD } from '../../action-names/action-names';
import randomNumber from '../../../utils/random-number';
import wordCollection from '../../../mock/word-collection/word-collection';

export default function setHiddenWordReducer(state = wordCollection[randomNumber(0, wordCollection.length - 1)], { type, randomWord }) {
  switch (type) {
    case SET_HIDDEN_WORD:
      return randomWord;
    default:
      return state;
  }
}
