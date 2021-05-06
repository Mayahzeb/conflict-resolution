// Assignment Code
var generateBtn = document.querySelector("#generate");

// TO DO: 1 - remove commas from generated password display on page load,
// 2 - introduce function to determine character types the user requests before initial shuffle.
// This can be achieved from using array chunking to distribute the array into 'if else' statements that would update the page using the 
// DOM command 'document.getElementById("password").placeholder'. 
// 3 - rewriting the function write password to fix the conditions of if else statements so a reset can be introduced without the need to reload.

// numInput will be used to splice the array length equal to numInput
var numInput;

// this creates and gives all the character options into one array
var passArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890+-&|!(){}[]^~*?:/%$#@`";
passArray = [...passArray];

// this randomizes the order of the array
// code function was sampled from a method called Durstenfeld shuffle, source ref:
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

    function shuffle(passArray) {

    for (let i = passArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [passArray[i], passArray[j]] = [passArray[j], passArray[i]];
    }
return;
  }

// Adding function to generate button to start initialization
generateBtn.addEventListener("click", writePassword);

// Adding function to event listener generateBtn
function writePassword() {
numInput = document.getElementById("numInput").value;

  document.getElementById("password").placeholder= "Your Secure Password";

if (numInput) {
  document.getElementById("password").placeholder= "Your Secure Password, characters: " + numInput +  ". Click the button to continue";
  console.log("Click the button again to continue");

    if (generateBtn.addEventListener("click" , () => {
      shuffle(passArray);
      // if not spliced initial display would show the output once
        passArray.splice(numInput); 
        document.getElementById("password").placeholder= passArray;
    }) ) {
    }
    

} else {
  document.getElementById("password").placeholder= "Please enter 8 - 84 characters";
}

return;
}

