// Assignment code here
var getLength = function(){
  var length = window.prompt("Please choose the length of the password between 8 and 128 characters");
  if(!length || parseInt(length) < 8 || parseInt(length) > 128){
    length = window.confirm("You have entered incorrect value. Valid values are between numbers 8 and 128. Would you like to proceed with valid values?");
    if(length)
      getLength();
  }
}

/*
var chracterType = {
  lowercase : window.confirm("Would you like to include lower case?"),
  uppercase : window.confirm("would you like to include upper case?"),
  numeric : window.confirm("would you like to include numeric values?"),
  specialCharacter : window.confirm("would you like to to include special character?")
};
*/

var chracterType = function() {
  var charType = {
    lowercase : window.confirm("Would you like to include lower case?"),
    uppercase : window.confirm("would you like to include upper case?"),
    numeric : window.confirm("would you like to include numeric values?"),
    specialCharacter : window.confirm("would you like to to include special character?")
  };
  return charType;
};

//gnerate password main function to be called on button click
var generatePassword = function(){
  var inputLength = getLength();
  var charTpe = chracterType();
  while(!Object.values(charTpe).includes(true)){
    window.alert("You will have to have atleast select one character type which is lower case, upper case, numeric and or special character.");
    charTpe = chracterType();
  }
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
