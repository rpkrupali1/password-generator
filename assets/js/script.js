// Assignment code here
var getLength = function(){
  var length = window.prompt("Please choose the length of the password between 8 and 128 characters");
  if(!length || parseInt(length) < 8 || parseInt(length) > 128){
    length = window.confirm("You have entered incorrect value. Valid values are between numbers 8 and 128. Would you like to proceed with valid values?");
    if(length)
      getLength();
  }
}

//gnerate password main function to be called on button click
var generatePassword = function(){
  getLength();

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
