import { SET_COUNT_WORDS } from '../../action-names/action-names';

export default function setCountWords(state = 0, { type, count }) {
  switch (type) {
    case SET_COUNT_WORDS:
      return state + count;
    default:
      return state;
  }
}
