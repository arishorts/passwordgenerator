let length = 0;
let lowercase_chars = false;
let uppercase_chars = false;
let number_chars = false;
let special_chars = false;
let charset = "";

function simulatedUserInput() {
  length = 10;
  lowercase_chars = false;
  uppercase_chars = false;
  number_chars = false;
  special_chars = true;
}

function userInput() {
  //How to cancel all prompts if one of them is cancelled
  let input_length = prompt("Please enter a password length", "0");
  let input_lowercase = prompt("Include lowercase characters?", "Y/N");
  let input_uppercase = prompt("Include uppercase characters?", "Y/N");
  let input_number = prompt("Include numeric characters?", "Y/N");
  let input_special = prompt("Include special characters?", "Y/N");
  //toUpperCase is not working
  lowercase_chars = input_lowercase == "y" ? true : false;
  uppercase_chars = input_uppercase == "y" ? true : false;
  number_chars = input_number == "y" ? true : false;
  special_chars = input_special == "y" ? true : false;
  length = input_length;
  lowercase_chars = input_lowercase;
  uppercase_chars = input_uppercase;
  number_chars = input_number;
  special_chars = input_special;
}

function generateCharset() {
  if (number_chars == "Y" || number_chars == "YES" || number_chars == "y") {
    charset += "1234567890";
  }
  if (
    lowercase_chars == "Y" ||
    lowercase_chars == "YES" ||
    lowercase_chars == "y"
  ) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }
  if (
    uppercase_chars == "Y" ||
    uppercase_chars == "YES" ||
    uppercase_chars == "y"
  ) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (special_chars == "Y" || special_chars == "YES" || special_chars == "y") {
    charset += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  } else {
    charset = "";
  }
  console.log(charset);
}

function validation() {
  //how to stop the generation if validation is not met?
  if (charset == "") {
    return "At least one type of character must be selected.";
  }
  if (length >= 8 && length <= 128) {
    return "Password must be over 8 and less than 128 characters.";
  }
  console.log(charset);
}

// function randomization() {
//   const passwordLength = Number(length);
//   console.log(charset);
//   console.log(passwordLength);
//   for (index = 0; index < passwordLength; index++) {
//     const randomValue = Math.floor(Math.random() * charset.length);
//     passwordContent += charset.charAt(randomValue);
//   }
// return passwordContent
// }

// Assignment code here
function generatePassword() {
  //is there a way to bring the global variables in here so they can be reset easily? currently i have to do it manually
  //simulatedUserInput();
  userInput();
  generateCharset();
  validation();
  let passwordContent = "";
  const passwordLength = Number(length);
  for (index = 0; index < passwordLength; index++) {
    const randomValue = Math.floor(Math.random() * charset.length);
    passwordContent += charset.charAt(randomValue);
  }
  return passwordContent;
  //i tried making this it's own randomization function, but then it wouldnt work. see above
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  length = 0;
  lowercase_chars = false;
  uppercase_chars = false;
  number_chars = false;
  special_chars = false;
  charset = "";
  passwordContent = "";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
