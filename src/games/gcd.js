import { writeHelloAndSetName, writeGoal, getUserAnswer, checkAnswer, writeGoodbye } from '../index.js';
import { getRandomInt } from '../random.js';
import { gcd } from '../math.js';

export default function game(questionsCount) {   
    const name = writeHelloAndSetName();

    writeGoal('Find the greatest common divisor of given numbers.');
    
    let correctAnswersCount = 0;

    do {
        const first = getRandomInt();
        const second = getRandomInt();
        const userAnswer = parseInt(getUserAnswer(`${first} ${second}`));    
        const isCorrect = checkAnswer(userAnswer, gcd(first, second));
        
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

