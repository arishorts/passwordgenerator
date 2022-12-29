let length = 9;
let charset = "";
let lowercase_chars = false;
let uppercase_chars = false;
let number_chars = false;
let special_chars = false;

simulatedUserInput();
function userInput() {
  length = 8;
  lowercase_chars = false;
  uppercase_chars = false;
  number_chars = true;
  special_chars = true;
}

function generateCharset() {
  if (number_chars) {
    charset += "1234567890";
  }
  if (lowercase_chars) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }
  if (uppercase_chars) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (special_chars) {
    charset += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  } else {
    charset = "";
  }
}
generatePassword();

// Assignment code here
function generatePassword() {
  simulatedUserInput(); //ask for user input
  generateCharset();
  if (charset == "") {
    return "At least one type of character must be selected.";
  }
  if (length < 8 || length > 128) {
    return "Password must be over 8 and less than 128 characters.";
  }
  const passwordLength = length;
  let passwordContent = "";
  for (index = 0; index < passwordLength; index++) {
    const randomValue = Math.floor(Math.random() * charset.length);
    passwordContent += charset.charAt(randomValue);
  }
  return passwordContent;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
