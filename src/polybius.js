// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function polybius(input, encode = true) {
    //get variable constants
    const encoder = {
      a: "11", 
      b: "21", 
      c: "31", 
      d: "41", 
      e: "51", 
      f: "12", 
      g: "22", 
      h: "32", 
      i: "42", 
      j: "42", 
      k: "52", 
      l: "13", 
      m: "23", 
      n: "33", 
      o: "43", 
      p: "53", 
      q: "14", 
      r: "24", 
      s: "34", 
      t: "44", 
      u: "54", 
      v: "15", 
      w: "25", 
      x: "35", 
      y: "45", 
      z: "55",
    }
    const decoder = {
      11: "a", 
      21: "b", 
      31: "c", 
      41: "d", 
      51: "e", 
      12: "f", 
      22: "g", 
      32: "h", 
      42: "(i/j)", 
      52: "k", 
      13: "l", 
      23: "m", 
      33: "n", 
      43: "o", 
      53: "p", 
      14: "q", 
      24: "r", 
      34: "s", 
      44: "t", 
      54: "u", 
      15: "v", 
      25: "w", 
      35: "x", 
      45: "y", 
      55: "z",
    }
    //get individual letters
    let newInput = input.split("");
    //if we can encode (encode === true)
    if (encode === true) {
      //we can use reduce to change letter
      return newInput.reduce((total, letter) => {
        //lowercase each letter being passed
        letter = letter.toLowerCase();
        //turn letters into char codes
        const result = letter.charCodeAt();
        //encode the letters
        if (result >= 97 && result <= 122) {
          return `${total}${encoder[letter]}`;
        }
        //get individual letter
        return (`${total}${letter}`);
        //return empty string in reduce
      }, "");
    }

    //handle spaces
    const final = newInput.reduce((acc, char) => {
      return char !== " " ? acc + 1 : acc;
    }, 0);
    
    //should be even
    if (final % 2 !== 0) return false;

    //get output
    let output = "";
    //create a loop
    for (let i = 0; i < newInput.length; i += 2) {
      if (newInput[i] !== " ") {
        const encoded = newInput[i] + newInput[i + 1];
        const decoded = decoder[encoded];
        output = `${output}${decoded}`;
      } else {
        i += 1;
        const encoded = newInput[i] + newInput[i + 1];
        const decoded = decoder[encoded];
        output = `${output} ${decoded}`;
      }
    }
    //return output
    return output;
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };