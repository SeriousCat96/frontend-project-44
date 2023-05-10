import play from '../index.js';
import { getRandomInt } from '../random.js';
import { gcd } from '../math.js';

export default function game(rounds) {
  play(
    rounds,
    'Find the greatest common divisor of given numbers.',
    () => {
      const first = getRandomInt(1, 100);
      const second = getRandomInt(1, 100);
      const question = `${first} ${second}`;
      const correctAnswer = gcd(first, second).toString();

      return { question, correctAnswer };
    },
  );
}
