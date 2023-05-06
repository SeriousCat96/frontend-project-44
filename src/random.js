export function getRandomInt(maxValue = 100) {
    return Math.floor(Math.random() * maxValue);
}

export function getRandomOperation(maxValue = 100) {
    const first = getRandomInt(maxValue);
    const second = getRandomInt(maxValue);

    let result;
    let expression;

    switch (getRandomInt(3)) {
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
    }

    return {
        expression,
        result
    };
}