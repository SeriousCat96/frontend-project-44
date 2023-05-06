import { writeHelloAndSetName, writeGoal, getUserAnswer, checkAnswer, writeGoodbye } from '../index.js';
import { getRandomInt } from '../random.js';

export default function game(questionsCount) {   
    const name = writeHelloAndSetName();

    writeGoal('Answer "yes" if the number is even, otherwise answer "no".');
    
    let correctAnswersCount = 0;

    do {
        const digit = getRandomInt();
        const userAnswer = getUserAnswer(digit);    
        const correctAnswer = digit % 2 === 0
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

