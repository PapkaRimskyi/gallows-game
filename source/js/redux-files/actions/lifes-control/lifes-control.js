import { CHANGE_LIFE, RESTORE_LIFE } from '../../action-names/action-names';

export function changeLife() {
  return {
    type: CHANGE_LIFE,
  };
}

export function restoreLife() {
  return {
    type: RESTORE_LIFE,
  };
}
