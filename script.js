var btn = document.querySelector("#generate");
var textarea = document.querySelector("#password");

function genPassword()
{ let len = 8;
  let options = [];
  const uppercaseConst = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const lowercaseConst = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const numbersConst = [0,1,2,3,4,5,6,7,8,9];
  const symbolsConst = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  
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

  if (!lowercase && !uppercase && !numeric && !symbols) {
    confirm("You must choose at least one option (Uppercase letters, Lowercase letters, Numbers and/or Symbols).");
    return;
  }

  let flag = false;
  while (flag === false) {
    let length = prompt("How many characters do you want your password to be? (8 minimum, 128 maximum)", "8");
    len = parseInt(length);
    if (isNaN(len)) {
      flag = false;
    }
    else if (len < 8 || len > 128) {
      flag = false;
    }
    else {
      flag = true;
    }
  }
  
  let password = "";
  for (let i = 0; i < len; i++) {
    let randomIndex = Math.floor(Math.random() * options.length);
    password += options[randomIndex];
  }
  textarea.value = password;
}

btn.addEventListener("click", genPassword);