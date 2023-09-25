import { prompt } from "./prompt.js";

console.log(`Welcome to the Number Guessing Game! 🎮

  Rules:
  1. The system will generate a random number between 0 and 100.
  2. Your task is to guess this number.
  3. Enter a number when prompted.
  4. If your guess is too high or too low, you'll be notified, and you can guess again.
  5. The game continues until you guess the correct number.
  
  Let's get started! 🚀`);

function getRandomNumber(min, max) {
  min = Math.ceil(0); // Permet d'avoir un seuil 0
  max = Math.floor(100); // Permet d'avoir un seuil 100
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomNumber);
  return randomNumber;
}
function guessRandomNumber(getRandomNumber) {
  let guess = Number(prompt("Guess a number between 0 and 100: "));

  function limiteGuess(guess) {
    if (guess < 0 || guess > 100 || isNaN(guess)) {
      console.log("Please enter a number between 0 and 100.");
      return guessRandomNumber(getRandomNumber);
    }
    return getRandomNumber();
  }
  // Permet de générer les limites du jeu pour ne pas avoir d'erreur si mauvaise saisie

  const randomNumber = limiteGuess(guess);
  let attempts = 1;

  //Boucle de la partie pour verifier si le nombre est trop haut ou trop bas
  while (guess !== randomNumber) {
    if (guess < randomNumber) {
      console.log("Too low!");
      guess = Number(prompt("Guess a number between 0 and 100: "));
      attempts++;
    } else if (guess > randomNumber) {
      console.log("Too high!");
      guess = Number(prompt("Guess a number between 0 and 100: "));
      attempts++;
    }

    if (guess === randomNumber) {
      console.log(
        `You got it! The number was ${randomNumber}. It took you ${attempts} attempts.`
      );
    }
  }
  return Replay(guessRandomNumber); // retourne a la fonction entre parenthese
}
guessRandomNumber(getRandomNumber); // Appel de la fonction --> ! Important d'appeler sinon pas utilisé en dehors de la fonction

function Replay(guessRandomNumber = getRandomNumber) {
  let attempts = 0;
  const replaygame = prompt("Do you want to play again? (y/n)");
  if (replaygame === "y") {
    guessRandomNumber(getRandomNumber); // Permet d'aller a la fonction guessRandomNumber avec un nouveau getRandomNumber
  } else {
    console.log("Goodbye!");
    console.error(1);
  }
}

Replay(guessRandomNumber); // Appel de la fonction --> ! Important d'appeler sinon pas utilisé en dehors de la fonction
