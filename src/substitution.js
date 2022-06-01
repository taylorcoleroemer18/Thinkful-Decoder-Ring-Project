// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26 || !input) return false;
    let standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
    //duplicates
    for (let i = 0; i < alphabet.length; i++) {
      for (let j = i + 1; j < alphabet.length; j++) {
        if (alphabet[i] === alphabet[j]) return false;
      }
    }
    
    //encode
    let code = [];
    if (encode === true) {
      for (let i = 0; i < alphabet.length; i++) {
        code[standardAlphabet[i]] =  alphabet[i]
      }
    } else {
      for (let i = 0; i < alphabet.length; i++) {
        code[alphabet[i]] = standardAlphabet[i]
      }
    }
    //return result
    let final = input.toLowerCase().split("").map(char => {
      if (char === " ") return " "
      return code[char];
    })
    return final.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
