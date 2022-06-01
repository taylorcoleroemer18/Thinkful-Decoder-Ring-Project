// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    if (!shift || shift > 25 || shift < -25) return false;
    if (encode === false) shift *= -1;
    //split alphabet and change to lowercase
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let newAlphabet = "";
    let lowerCaseInput = input.toLowerCase();
    
    //loop through and shift
    for (let char of lowerCaseInput)
      if (!alphabet.includes(char)) newAlphabet += char;
      else {
        let letterIndex = alphabet.indexOf(char);
        let indexShift = letterIndex + shift;
        indexShift = indexShift > 25 ? indexShift -= 26 : indexShift < 0 
        ? indexShift += 26 : indexShift;
        newAlphabet += alphabet[indexShift];
      }
    // return result
    return newAlphabet;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };