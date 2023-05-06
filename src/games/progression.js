import { writeHelloAndSetName, writeGoal, getUserAnswer, checkAnswer, writeGoodbye } from '../index.js';
import { getRandomSequence } from '../random.js';

export default function game(questionsCount) {   
    const name = writeHelloAndSetName();

    writeGoal('What number is missing in the progression?');
    
    let correctAnswersCount = 0;

    do {
        const progression = getRandomSequence(10, 10);
        const userAnswer = parseInt(getUserAnswer(progression.sequence));    
        const isCorrect = checkAnswer(userAnswer, progression.element);
        
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

