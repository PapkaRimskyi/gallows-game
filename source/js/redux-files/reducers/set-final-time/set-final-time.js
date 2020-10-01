import { SET_FINAL_TIME } from '../../action-names/action-names';

export default function setFinalTime(state = 0, { type, time }) {
  switch (type) {
    case SET_FINAL_TIME:
      return time;
    default:
      return state;
  }
}
