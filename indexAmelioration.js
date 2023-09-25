import { prompt } from "./prompt.js";

// Generate a random number within a range
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Validate the user's input
const isValidNumber = (number) => {
  return !Number.isNaN(number) && number >= 0 && number <= 100;
};

const game = () => {
  const targetNumber = getRandomNumber(0, 100);
  let attemptCount = 0;

  const playGuessingGame = () => {
    const userGuess = Number(prompt("Enter a number: "));
    attemptCount += 1;

    if (!isValidNumber(userGuess)) {
      console.log(
        "🛑 The entered number is invalid. It must be between 0 and 100.\n\n"
      );
      return playGuessingGame();
    }

    if (userGuess > targetNumber) {
      console.log("📈 The entered number is **too big**.\n\n");
      return playGuessingGame();
    }

    if (userGuess < targetNumber) {
      console.log("📉 The entered number is **too small**.\n\n");
      return playGuessingGame();
    }

    // If this point is reached, the user has correctly guessed the number
    console.log(`🟢 Well done! The random number was indeed ${userGuess}.`);
    console.log(`✨ You succeeded in ${attemptCount} attempts.`);
  };

  const restartGame = () => {
    const choice = prompt("Do you want to play again? (Y/N): ");

    if (choice.toUpperCase() === "Y") {
      console.log("\n\n");
      game();
    } else if (choice.toUpperCase() === "N") {
      console.log("Thank you for playing! Goodbye.");
    } else {
      console.log("Invalid choice. Please enter Y or N.");
      restartGame();
    }
  };

  console.log(targetNumber);
  playGuessingGame();
  restartGame();
};

console.log(`
Welcome to the Number Guessing Game! 🎮

Rules:
1. The system will generate a random number between 0 and 100.
2. Your task is to guess this number.
3. Enter a number when prompted.
4. If your guess is too high or too low, you'll be notified, and you can guess again.
5. The game continues until you guess the correct number.

Let's get started! 🚀
  `);
game();
