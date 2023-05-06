import readlineSync from 'readline-sync';

export function writeHelloAndSetName() {
    console.log("Welcome to the Brain Games!");
    
    const name = readlineSync.question('May I have your name? ');
    
    console.log(`Hello, ${name}!`);
    
    return name;
}

export function writeGoal(text) {
    console.log(text);
}

export function getUserAnswer(question) {
    const userAnswer = readlineSync.question(`Question: ${question} `);
    console.log(`Your answer: ${userAnswer}`);

    return userAnswer;
}

export function checkAnswer(userAnswer, correctAnswer) {
    const isCorrect = userAnswer === correctAnswer;
    if (isCorrect) {
        console.log('Correct!');
    } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    }

    return isCorrect;
}

export function writeGoodbye(name, userIsWin) {
    if (userIsWin) {
        console.log(`Congratulations, ${name}!`);
    }
    else {
        console.log(`Let's try again, ${name}!`);
    }
}