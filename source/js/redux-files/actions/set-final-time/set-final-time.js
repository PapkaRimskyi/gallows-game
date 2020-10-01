import { SET_FINAL_TIME } from '../../action-names/action-names';

export default function setFinalTime(time) {
  return {
    type: SET_FINAL_TIME,
    time,
  };
}
