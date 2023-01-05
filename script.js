function InitiatePassword(
  length,
  lowercase,
  uppercase,
  numbers,
  special,
  charset
) {
  this.length = length;
  this.lowercase_chars = lowercase;
  this.uppercase_chars = uppercase;
  this.numbers_chars = numbers;
  this.special_chars = special;
  this.charset = charset;
}

//0) This was used to simulate a input for testing and debugging
function simulatedUserInput() {
  length = 9;
  lowercase_chars = true;
  uppercase_chars = true;
  numbers_chars = true;
  special_chars = true;
  let charset = "";
}
//1) Takes user input via alert fields
function userInputAndValidation(pass) {
  let input_length = Number(prompt("Please enter a password length", "0"));
  if (input_length < 8 || input_length > 128) {
    throw new Error(
      alert("Password must be at least 8 and no more than 128 characters.")
    );
  }
  let input_lowercase = prompt(
    "Include lowercase characters?",
    "Y/N"
  ).toUpperCase();
  if (input_lowercase !== "Y" && input_lowercase !== "N") {
    throw new Error(alert("Improper input."));
  }
  let input_uppercase = prompt(
    "Include uppercase characters?",
    "Y/N"
  ).toUpperCase();
  if (input_uppercase != "Y" && input_uppercase != "N") {
    throw new Error(alert("Improper input."));
  }
  let input_numbers = prompt(
    "Include numeric characters?",
    "Y/N"
  ).toUpperCase();
  if (input_numbers !== "Y" && input_numbers !== "N") {
    throw new Error(alert("Improper input."));
  }
  let input_special = prompt(
    "Include special characters?",
    "Y/N"
  ).toUpperCase();
  if (input_special !== "Y" && input_special !== "N") {
    throw new Error(alert("Improper input."));
  }
  pass.lowercase_chars = input_lowercase == "Y" ? true : false;
  pass.uppercase_chars = input_uppercase == "Y" ? true : false;
  pass.numbers_chars = input_numbers == "Y" ? true : false;
  pass.special_chars = input_special == "Y" ? true : false;
  pass.length = input_length;
}

//2) Generates a character set based on all possible values.
function generateCharset(pass) {
  if (pass.numbers_chars) {
    pass.charset += "1234567890";
  }
  if (pass.lowercase_chars) {
    pass.charset += "abcdefghijklmnopqrstuvwxyz";
  }
  if (pass.uppercase_chars) {
    pass.charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (pass.special_chars) {
    pass.charset += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  }
}
//3) Performs a followup validation for certainty.
function furtherValidation(pass) {
  if (pass.charset == "") {
    throw new Error(alert("At least one type of character must be selected."));
  }
}

//4) Supplies random values, up to the numbers of characters in the character set from step 2, and corresponds it with one of the values in the character set.
//5) Adds this value a string representing the final password. Loops until all values are generated.
function randomization(pass) {
  let passwordContent = "";
  const passwordLength = pass.length;
  for (index = 0; index < passwordLength; index++) {
    const randomValue = Math.floor(Math.random() * pass.charset.length);
    passwordContent += pass.charset.charAt(randomValue);
  }
  return passwordContent;
}

// Assignment code here
function generatePassword() {
  var pass = new InitiatePassword(0, false, false, false, false, "");
  let passwordContent = "";
  //simulatedUserInput();
  userInputAndValidation(pass);
  generateCharset(pass);
  furtherValidation(pass);
  return randomization(pass);
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
//
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
