// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Generate password function andn wrire all the logic within this function
function generatePassword () {

    //Create empty array to hold user requested characters
var requestedChar = [];

//Write confirm for special charactors and set to var
var specialChar = confirm("Would you like to use special characters in your password?") 
//create array of special char
var speciaLchar = "!\"#$%&')(*+,-./:;>=<?@[^_`]{|}~"
//Create if statment that checks if the user said yes or no to this confirm and based on their response push those specific char to our empty array
if (specialChar){
    requestedChar = requestedChar.concat(speciaLchar);
    console.log(speciaLchar)
}


//Write confirm for uppercase and set to var
var upperCase = confirm("Would you like to use uppercase letters in your password?")
//create array of uppercase
var uppeRcase = "ACDEFGHIJKLMNOPQRSTUVWXYZ"
//Create if statment that checks if the user said yes or no to this confirm and based on their response push those specific char to our empty array
 if (upperCase){
    requestedChar = requestedChar.concat(uppeRcase)
    console.log(uppeRcase)
    }

// Write confirm for lowercase and set to var
var lowerCase = confirm("Would you like to use lowercase letters in your password?")
//create array of lowercase
var loweRcase = "abcdefghijklmnopqrstuvwxyz"
//Create if statment that checks if the user said yes or no to this confirm and based on their response push those specific char to our empty array
if (lowerCase){
    requestedChar = requestedChar.concat(loweRcase)
    console.log(loweRcase)
}

// Write confirm for numbers and set to var
var numBers = confirm("Would you like to use numbers in your password?")
//create array of numbers
var numbErs = "1234567890"
//Create if statment that checks if the user said yes or no to this confirm and based on their response push those specific char to our empty array
if (numBers){
    requestedChar = requestedChar.concat(numbErs)
    console.log(numbErs)
}

// //Write prompt for how many charaters (8-128) in password and set to var
var passwordLength = prompt("How many characters would you like to use? (Please choose between 8 and 128 characters!)")
if (passwordLength < 8 || passwordLength > 128) {
    alert("Sorry, it must be between 8 and 128 characters!")
}



//Create var to hold final result
var finalPassword = []



//TODO: push confirm arrays to empty array and run loop on empty array to choose password based on number of characters user wants

for (var i = 0; i < passwordLength; i++) {
Math.floor(Math.random()) * requestedChar.length; i++
finalPassword = finalPassword + requestedChar}

// var requestedChar = generatePassword();
var finalPassword = [];

return finalPassword;
}
