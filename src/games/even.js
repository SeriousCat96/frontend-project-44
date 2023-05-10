import play from '../index.js';
import { getRandomInt } from '../random.js';

export default function game(rounds) {
  play(
    rounds,
    'Answer "yes" if the number is even, otherwise answer "no".',
    () => {
      const question = getRandomInt();
      const correctAnswer = question % 2 === 0
        ? 'yes'
        : 'no';

      return { question, correctAnswer };
    },
  );
}
