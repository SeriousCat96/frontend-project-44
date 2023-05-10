import { play } from '../index.js';
import { getRandomInt } from '../random.js';
import { isPrime } from '../math.js';

export default function game(rounds) {   
    play(
        rounds, 
        'Answer "yes" if given number is prime. Otherwise answer "no".', 
        () => {
            const question = getRandomInt();
            const correctAnswer = isPrime(question)
            ? "yes"
            : "no";

            return { question, correctAnswer };
        }
    );
}
