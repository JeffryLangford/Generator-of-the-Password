// grabbing button object
var btn = document.querySelector("#generate");

// genPassword
function genPassword()
{

  // flags
  let len = 8;
  
  // password pool
  const uppercaseConst = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const lowercaseConst = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const numbersConst = [0,1,2,3,4,5,6,7,8,9];
  const symbolsConst = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  
  let options = [];

  let lowercase = confirm("Do you want to include lowercase letters?");
  if (lowercase == true) {
    options = options.concat(lowercaseConst);
  }
 
  let uppercase = confirm("Do you want to include uppercase letters?");
  if (uppercase == true) {
    options = options.concat(uppercaseConst);
  }
  
  let numeric = confirm("Do you want to include numbers?");
  if (numeric == true) {
    options = options.concat(numbersConst);
  }
  
  let symbols = confirm("Do you want to include symbols?");
  if (symbols == true) {
    options = options.concat(symbolsConst);
  }

  while (!lowercase && !uppercase && !numeric && !symbols) {
    confirm("You must choose at least one option (Uppercase letters, Lowercase letters, Numbers and/or Symbols).");
    return;
  }

  let length = prompt("How many characters do you want your password to be? (8 minimum, 128 maximum)", "8");
  if (length) {
    len = parseInt(length);
    
    // TODO: validate that len is an integer and bettern 8 and 128
  
  }
  
  let password = "";
  
  console.log(options);
  
  // generate the password based on options selected
  for (let i = 0; i < len; i++) {
    var randomNumber = Math.floor(Math.random() * len);
    password += options.string(randomNumber, randomNumber +1);
  }
}

// assigning a listener to the button
btn.addEventListener("click", genPassword);