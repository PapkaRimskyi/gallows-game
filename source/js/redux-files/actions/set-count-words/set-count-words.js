import { SET_COUNT_WORDS } from '../../action-names/action-names';

export default function setCountWords(count) {
  return {
    type: SET_COUNT_WORDS,
    count,
  };
}
