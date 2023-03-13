// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {


// Password variable values:

var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberArray = ["0","1","2","3","4","5","6","7","8"," 9,"];


var specialCharacterArray = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

var finalArray = [];

var userArray = [];

// Prompts  for user input (and conditions  for theses prompts)

var numberCharacter = prompt ("How many Characters do you want for your password ? Select between 8 and 128?");

  if(numberCharacter < 8 || numberCharacter > 128){
      
  return "Please choose a valid number of characters  between 8 and 128 .";

  // isNan to indicate to put a valid number
} else if (isNaN(numberCharacter)) { 

  numberCharacter = prompt("Please enter a valid number.");
}
else {
  alert("Your password will be " + numberCharacter + " characters long.");
  
}


var lowerCases = confirm("Do you want lowercase characters?");

if (lowerCases) {
  var turnToLowercase = alert("Your password will have lowercase characters.");
}
else {
  alert("Your password will NOT have lowercase characters.");
}

var specialCharacters = confirm("Do you want special characters?");
  
  if (specialCharacters) {
    alert("Your password will have special characters.");
  }
  else {
    alert("Your password will NOT have special characters.");
  }

  if (lowerCases === false && upperCases === false && numbers === false && specialCharacters === false) {

    return "Please select one charcter type at least !";
  };


  //  characters + concat method to combine two arrays and returns a new one 

  if (numbers){
     
    finalArray = finalArray.concat(numberArray);
    
  }
  
  if (upperCases){
    finalArray = finalArray.concat(upperCaseArray);
  
  }
  
  if (lowerCases){
    finalArray = finalArray.concat(lowerCaseArray);
  
  }
  
  if (specialCharacters){
    finalArray = finalArray.concat(specialCharacterArray);
  }





}
 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
