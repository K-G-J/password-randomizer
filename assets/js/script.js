var password = "";
// characters object
var characters = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numeric: "0123456789",
  special: "!+'@,-./:;<=>?@[]^_{}~#$%^&*()"
};

// Function to set password characters and length 
var setPasswordCharacters = function() {
  // when prompt answered input validated and character type selected
  var alphabet, numbers, special;
  // select length of password 
  setLength = function() {
    var promptLength = window.prompt("Please enter your password length between 8 and 128 characters.");
    promptLength = parseInt(promptLength);
    if (8 <= promptLength && promptLength <= 128) {
      length = promptLength
    } else {
      window.alert("You need to provide a valid answer. Please try again.");
      setLength();
    }
  }
  setLength();
  // select case of letters 
  while (alphabet === undefined) {
    var promptCase = window.prompt("Would you like your password to include UPPER case letters? Enter 'YES' or 'NO.'");
    switch (promptCase.toLowerCase()) {
      case "yes":
        alphabet = characters.lowercase + characters.uppercase;
        break;
      case "no":
        alphabet = characters.lowercase;
        break;
      default:
        window.alert("You need to provide a valid answer. Please try again.");
        break;
    }
  }
  // include numbers or not 
  while (numbers === undefined) {
    var promptNumeric = window.prompt("Would you like your password to include numbers? Enter 'YES' or 'NO.'");
    switch (promptNumeric.toLowerCase()) {
      case "yes":
        numbers = characters.numeric
        break;
      case "no":
        numbers = ""
        break;
      default:
        window.alert("You need to provide a valid answer. Please try again.");
        break;
    }
  }
  // include special characters or not 
  while (special === undefined) {
    var promptSpecial = window.prompt("Would you like your password to include special characters? Enter 'YES' or 'NO.'");
    switch (promptSpecial.toLowerCase()) {
      case "yes":
        special = characters.special
        break;
      case "no":
        special = ""
        break;
      default:
        window.alert("You need to provide a valid answer. Please try again.");
        break;
    }
  }
  // set password characters based on prompt responses
  password = alphabet + numbers + special;
  return;
};


// Function to shuffle password characters and set length 
var shuffle = function() {
  var passwordArray = [];
  // convert password to an array 
  var passwordArray = password.split("");
  // increase password length if less than input length 
  while (passwordArray.length < length) {
    passwordArray = passwordArray.concat(passwordArray);
  }
  // randomly sort array items 
  passwordArray = passwordArray.sort(() => Math.random() - 0.5);
  // set password length from setLength() prompt 
  passwordArray.length = length
  // convert passwordArray back to string 
  password = passwordArray.join("");
  return;
}

// FUNCTION TO GENERATE PASSWORD 
var generatePassword = function() {
  // prompt and ask for password inputs 
  setPasswordCharacters();
  // shuffle characters and set length 
  shuffle();
  // password displayed in an alert 
  window.alert("Your new password is " + password);
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
