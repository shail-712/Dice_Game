function rollDice() {
  // Generate random numbers for both players
  var randomVariable1 = Math.floor(Math.random() * 6) + 1;
  var randomVariable2 = Math.floor(Math.random() * 6) + 1;

  // Function to change dice image based on random number
  function changeDiceImage(diceClass, randomValue) {
    const imageElement = document.querySelector(diceClass);
    if (imageElement) {
      imageElement.setAttribute("src", `images/dice${randomValue}.png`);
    } else {
      console.error("Dice image element not found for class: " + diceClass);
    }
  }

  // Update Player 1's dice image
  changeDiceImage(".img1", randomVariable1);

  // Update Player 2's dice image
  changeDiceImage(".img2", randomVariable2);
}
