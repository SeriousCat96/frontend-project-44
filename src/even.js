import readlineSync from 'readline-sync';
import getRandomInt from './random.js';

export default function game(questionsCount) {
    console.log("Welcome to the Brain Games!");
    
    const name = readlineSync.question('May I have your name? ');
    
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    
    let correctAnswersCount = 0;

    do {
        const digit = getRandomInt();
        const userAnswer = readlineSync.question(`Question: ${digit}`);
        
        console.log(`Your answer: ${userAnswer}`);
    
        const correctAnswer = digit % 2 === 0
            ? "yes"
            : "no";
    
        if (userAnswer === correctAnswer) {
            console.log('Correct!');
            correctAnswersCount++;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            break;
        }
    } while (correctAnswersCount < questionsCount);

    if (correctAnswersCount < questionsCount) {
        console.log(`Let's try again, ${name}!`)
    }
    else {
        console.log(`Congratulations, ${name}!`)
    }
}

