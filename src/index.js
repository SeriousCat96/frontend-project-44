import readlineSync from 'readline-sync';

export default function play(rounds, goalText, questionCallback) {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log(goalText);

  let correctAnswersCount = 0;

  do {
    const { question, correctAnswer } = questionCallback();
    const userAnswer = readlineSync.question(`Question: ${question} `);

    console.log(`Your answer: ${userAnswer}`);

    const isCorrect = userAnswer === correctAnswer;

    if (isCorrect) {
      correctAnswersCount += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  } while (correctAnswersCount < rounds);

  console.log(`Congratulations, ${name}!`);
}
