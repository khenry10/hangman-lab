//Welcome Message
console.log("welcome to hangman");
// Prompts user to get secret word --> UNCOMMENT WHEN DONE <--

secretWord = prompt("Please select a secret word!")

//Hardcoded secretWord, delete when done.var secretWord = 'toast'

letterGuesses = [] ;
var correctGuesses = []

while (letterGuesses.length < (secretWord.length + 3)) {
  letterGuesses.push(prompt(displaySecretWord(secretWord) + "     Pick a letter."));
  if (displaySecretWord(secretWord) === secretWord) {
    alert('You win!')
    break;
  } else if (letterGuesses.length === (secretWord.length + 3)) {
    alert('You lose')
  }
}

function displaySecretWord(secretWord){
  display = ""
for (i = 0; i < secretWord.length; i++) {
    if (letterGuesses.includes(secretWord[i])) {
      display = display + secretWord[i];
    } else display = display + ' _ ';
  } return display
};
