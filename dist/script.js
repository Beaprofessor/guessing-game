let input = document.getElementById("input");
let button = document.getElementById("button");
let wrong = document.getElementById("wrong");
let guesses = document.getElementById("guesses");

let answer = Math.floor(Math.random() * 100) + 1;
console.log(answer);

let numGuess = 0;
button.addEventListener("click", () => {
  guessNumber();
});

function guessNumber() {
  if (input.value < 1 || input.value > 100 || isNaN(input.value))
    wrong.innerHTML = "Enter number of your choice between 1 to 100";
  else {
    numGuess ++;
    guesses.innerHTML = "No. of Guess are : " + numGuess;
    if (input.value > answer) {
      wrong.innerHTML = "You guessed too high";
      input.value = "";
    } else if (input.value < answer) {
      wrong.innerHTML = "You guessed too LOWW!!";
      input.value = "";
    } else {
      wrong.innerHTML = "Congo Guessed it right"
      setTimeout(()=>{
        resetGame()
      },5000) 
    
    }
  }
}


function resetGame(){
    numGuess = 0
    answer = Math.floor(Math.random() * 100) + 1;
     wrong.innerHTML = "Ready to start a new Game ?"
    input.value=""
      guesses.innerHTML = "No. of Guess are : 0"
}