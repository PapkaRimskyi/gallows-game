import { CHANGE_LIFE, RESTORE_LIFE } from '../../action-names/action-names';

function changeLife(lifes) {
  const lifesCopy = lifes.slice();
  lifesCopy.splice(lifesCopy.findIndex((item) => (item === true ? item : false)), 1, false);
  return lifesCopy;
}

export default function lifesControl(state = [true, true, true, true, true, true], { type }) {
  switch (type) {
    case CHANGE_LIFE:
      return [...changeLife(state)];
    case RESTORE_LIFE:
      return [...state.map((life) => (life || true))];
    default:
      return state;
  }
}
