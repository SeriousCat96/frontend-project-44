import { play } from '../index.js';
import { getRandomOperation } from '../random.js';

export default function game(rounds) {
    play(
        rounds, 
        'What is the result of the expression?', 
        () => {
            const { expression: question, result } = getRandomOperation();
            const correctAnswer = result.toString();

            return { question, correctAnswer };
        }
    );
}
