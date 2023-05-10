import play from '../index.js';
import { getRandomSequence } from '../random.js';

export default function game(rounds) {
  play(
    rounds,
    'What number is missing in the progression?',
    () => {
      const { sequence: question, element } = getRandomSequence(10, 10);
      const correctAnswer = element.toString();

      return { question, correctAnswer };
    },
  );
}
