// get length of password and provide error for invalid values
var getLength = function(){
  var length = window.prompt("Please choose the length of the password between 8 and 128 characters");
  if(!length || parseInt(length) < 8 || parseInt(length) > 128){
    length = window.confirm("You have entered incorrect value. Valid values are between numbers 8 and 128. Would you like to proceed with valid values?");
    if(length)
      getLength();
  }
  return length;
}

// define character type values in object.
var chracterType = function() {
  var charType = {
    lowercase : window.confirm("Would you like to include lower case?"),
    uppercase : window.confirm("would you like to include upper case?"),
    numeric : window.confirm("would you like to include numeric values?"),
    specialCharacter : window.confirm("would you like to to include special character?")
  };
  return charType;
};

//based on character type set the value of character
var getCharSet = function(charType){
  var charSet = "";
  if(charType.lowercase)
    charSet += "abcdefghijklmnopqrstuvwxyz";
  if(charType.uppercase)
    charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if(charType.numeric)
    charSet += "0123456789";
  if(charType.specialCharacter)
    charSet += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  return charSet;
}

//gnerate password main function to be called on button click
var generatePassword = function(){
  var inputLength = getLength();
  if(!inputLength) return;
  var charType = chracterType();
  while(!Object.values(charType).includes(true)){
    var confirm = window.alert("You will have to have atleast select one character type which is lower case, upper case, numeric and or special character. Would you like to continue?");
    if(!confirm) return;
    charType = chracterType();
  }
  var charSet = getCharSet(charType);
  var password = "";
  for (let i = 0; i < inputLength; ++i) {
    password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if(!password)
    password = "Your Secure Password"
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
