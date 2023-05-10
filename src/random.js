export function getRandomInt(minValue = 0, maxValue = 100) {
  return Math.floor(Math.random() * (maxValue - minValue) + minValue);
}

export function getRandomOperation(maxValue = 100) {
  const first = getRandomInt(1, maxValue);
  const second = getRandomInt(1, maxValue);

  let result;
  let expression;

  switch (getRandomInt(0, 3)) {
    case 0:
      result = first + second;
      expression = `${first} + ${second}`;
      break;
    case 1:
      result = first - second;
      expression = `${first} - ${second}`;
      break;
    case 2:
      result = first * second;
      expression = `${first} * ${second}`;
      break;
    default: break;
  }

  return {
    expression,
    result,
  };
}

export function getRandomSequence(length, maxStep) {
  const first = getRandomInt(1, 100);
  const step = getRandomInt(1, maxStep);
  const elementIndex = getRandomInt(0, length);

  let sequence = '';
  let element = 0;
  let sum = first;

  for (let i = 0; i < length; i += 1) {
    if (i === elementIndex) {
      element = sum;
      sequence += '.. ';
    } else {
      sequence += `${sum} `;
    }

    sum += step;
  }

  return {
    sequence,
    element,
  };
}
