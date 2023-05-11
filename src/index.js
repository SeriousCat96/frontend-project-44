import readlineSync from 'readline-sync';

export const rounds = 3;

export default function play(rounds, goalText, questionCallback) {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);
  console.log(goalText);

  for (let i = 0; i < rounds; i += 1) 
  {
    const { question, correctAnswer } = questionCallback();
    const userAnswer = readlineSync.question(`Question: ${question} `);

    console.log(`Your answer: ${userAnswer}`);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}
