// Assignment Code
var generateBtn = document.querySelector("#generate");
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!'#$%&()*+,-./:;<=>?@/][^_`{|}~";
var passwordLength = 128;


function generatePassword() {
  var newPassword = '';
  passwordLength = prompt('How many characters?');
  console.log(passwordLength);
  lowercaseChars = prompt('Do you want lowercase?');
  console.log(lowercaseChars);
  for(i=0 ; i <= passwordLength ; i++) {
    console.log("i=" + i)
    var index = Math.floor(Math.random() * chars.length);
    newPassword = newPassword + chars[index];
  };
  return newPassword
};

// Write password to the #password input
function writePassword() { 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
