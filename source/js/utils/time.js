function timerDisplayCheck(time) {
  const DOUBLE_DIGIT = 10;
  if (time < DOUBLE_DIGIT) {
    return `0${time}`;
  }
  return time;
}

export default function timerDisplay(time) {
  const MAX_SEC = 60;
  let sec = 0;
  let min = 0;
  if (time < MAX_SEC) {
    return `${timerDisplayCheck(time)}s`;
  }
  min = parseInt(time / MAX_SEC, 10);
  sec = time % MAX_SEC;
  return `${timerDisplayCheck(min)}:${timerDisplayCheck(sec)}`;
}
