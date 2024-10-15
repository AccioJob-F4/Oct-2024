/* 
Create a Promise that simulates a dice roll. If the number
rolled is greater than 3, resolve with "You won!" or else reject with "You loose!"
*/

const diceRoll = new Promise((resolve, reject) => {
  const roll = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
  console.log("🚀 ~ You rolled a ~:", roll);

  setTimeout(() => {
    if (roll > 3) resolve("You won!");
    else reject("You loose!");
  }, 2000);
});

diceRoll
  .then((message) => {
    console.log("🚀 ~ diceRoll.then ~ message:", message);
  })
  .catch((error) => {
    console.log("🚀 ~ diceRoll.then ~ error:", error);
  });
