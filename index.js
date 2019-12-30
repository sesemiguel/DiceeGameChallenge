// This function generates a random integer within a range
function rng(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// This function generates the dice image based on the random number
function setDiceImage(score, imgClass) {
  if (score == 1) {
    document.querySelector("."+imgClass).setAttribute("src", "images/dice1.png");
  }
  else if (score == 2) {
    document.querySelector("."+imgClass).setAttribute("src", "images/dice2.png");
  }
  else if (score == 3) {
    document.querySelector("."+imgClass).setAttribute("src", "images/dice3.png");
  }
  else if (score == 4) {
    document.querySelector("."+imgClass).setAttribute("src", "images/dice4.png");
  }
  else if (score == 5) {
    document.querySelector("."+imgClass).setAttribute("src", "images/dice5.png");
  }
  else if (score == 6) {
    document.querySelector("."+imgClass).setAttribute("src", "images/dice6.png");
  }
}

// Gets the winner and displays it on screen
function getWinner(playerOneScore, playerTwoScore){
  if (playerOneScore > playerTwoScore){
    document.querySelector("h1").textContent = "Player One Wins";
  }
  else if (playerOneScore < playerTwoScore){
    document.querySelector("h1").textContent = "Player Two Wins";
  }
  else{
    document.querySelector("h1").textContent = "Draw";
  }
}

function main(){
  var playerOneScore;
  var playerTwoScore;

  playerOneScore = rng(1, 7);
  playerTwoScore = rng(1, 7);

  setDiceImage(playerOneScore, "img1");
  setDiceImage(playerTwoScore, "img2");

  getWinner(playerOneScore, playerTwoScore);
}

main();
