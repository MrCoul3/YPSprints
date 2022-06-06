function range(start, end, step, isRight) {
  const array = [];
  if (!end) {
    if (Math.sign(start) === -1) {
      for (let i = 0; i > start; i--) {
        array.push(i);
      }
    } else {
      for (let i = 0; i < start; i++) {
        array.push(i);
      }
    }
  }
  if (end && step === undefined) {
    if (Math.sign(end) === -1) {
      for (let i = start; i > end; i--) {
        array.push(i);
      }
    } else {
      for (let i = start; i < end; i++) {
        array.push(i);
      }
    }
  }
  if (end && step !== undefined) {
    if (step !== 0) {
      if (Math.sign(end) === -1) {
        for (let i = start; i > end; i += step) {
          array.push(i);
        }
      } else {
        for (let i = start; i < end; i += step) {
          array.push(i);
        }
      }
    } else if (Math.sign(end) === -1) {
      for (let i = start; i > end; i--) {
        array.push(start);
      }
    } else {
      for (let i = start; i < end; i++) {
        array.push(start);
      }
    }
  }
  if (isRight) {
    return array.reverse();
  }
  return array;
}

function rangeRight(start, end, step) {
  return range(start, end, step, true);
}
rangeRight();
