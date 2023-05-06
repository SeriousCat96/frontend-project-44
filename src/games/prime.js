import { writeHelloAndSetName, writeGoal, getUserAnswer, checkAnswer, writeGoodbye } from '../index.js';
import { getRandomInt } from '../random.js';
import { isPrime } from '../math.js';

export default function game(questionsCount) {   
    const name = writeHelloAndSetName();

    writeGoal('Answer "yes" if given number is prime. Otherwise answer "no".');
    
    let correctAnswersCount = 0;

    do {
        const digit = getRandomInt();
        const userAnswer = getUserAnswer(digit);    
        const correctAnswer = isPrime(digit)
            ? "yes"
            : "no";
        
        const isCorrect = checkAnswer(userAnswer, correctAnswer);
        
        if (isCorrect) {
            correctAnswersCount++;
        } else {
            break;
        }
    } while (correctAnswersCount < questionsCount);

    if (correctAnswersCount < questionsCount) {
        writeGoodbye(name, false);
    }
    else {
        writeGoodbye(name, true);
    }
}

