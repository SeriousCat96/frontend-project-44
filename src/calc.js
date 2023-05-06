import { writeHelloAndSetName, writeGoal, getUserAnswer, checkAnswer, writeGoodbye } from './index.js';
import { getRandomOperation } from './random.js';

export default function game(questionsCount) {   
    const name = writeHelloAndSetName();

    writeGoal('What is the result of the expression?');
    
    let correctAnswersCount = 0;

    do {
        const operation = getRandomOperation();
        const userAnswer = parseInt(getUserAnswer(operation.expression));    
        const isCorrect = checkAnswer(userAnswer, operation.result);
        
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

