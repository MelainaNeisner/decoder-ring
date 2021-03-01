// Please refrain from tampering with the setup coded provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add coded (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any coded you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution coded here
    if (!alphabet) {return false}; //does alphabet exist?
    if (alphabet.length !== 26) {return false}; //check for length
        let letter = alphabet[0]; //checking for repeating letters vvv
        let count = 0;
        for (let letters of alphabet) {
          if (letters == letter) {
            count++;
          }
          console.log("alpha check", alphabet);
        }
        if (count >= 2) 
        return false;

    //original alphabet and new alpha according to alphabet argument
    let transponded = [
      {alpha: 'a', newNew: ''},
      {alpha: 'b', newNew: ''},
      {alpha: 'c', newNew: ''},
      {alpha: 'd', newNew: ''},
      {alpha: 'e', newNew: ''},
      {alpha: 'f', newNew: ''},
      {alpha: 'g', newNew: ''},
      {alpha: 'h', newNew: ''},
      {alpha: 'i', newNew: ''},
      {alpha: 'j', newNew: ''},
      {alpha: 'k', newNew: ''},
      {alpha: 'l', newNew: ''},
      {alpha: 'm', newNew: ''},
      {alpha: 'n', newNew: ''},
      {alpha: 'o', newNew: ''},
      {alpha: 'p', newNew: ''},
      {alpha: 'q', newNew: ''},
      {alpha: 'r', newNew: ''},
      {alpha: 's', newNew: ''},
      {alpha: 't', newNew: ''},
      {alpha: 'u', newNew: ''},
      {alpha: 'v', newNew: ''},
      {alpha: 'w', newNew: ''},
      {alpha: 'x', newNew: ''},
      {alpha: 'y', newNew: ''},
      {alpha: 'z', newNew: ''},
    ]
    //assign false alphabet into transponded newNew // alphabet.split('').forEach((letter) => {}
    let store = 0
   
    alphabet.split('').forEach((element) => {
      //loop over alphabet input
        transponded[store].newNew = element;
        store += 1
    });

    input = input.toLowerCase(); //input to lowercase
    const result = []; //results live here and are returned at the end
    
    if (encode) {
      //when encode is true do this...
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {result.push(" ")}
        for (let j = 0; j <transponded.length; j++) {
          if (input[i] === transponded[j].alpha) {
            result.push(transponded[j].newNew)
          }
        }
      }
    } else { //when encode is not true do this. decode
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {result.push(" ")}
        for (let j = 0; j <transponded.length; j++) {
          if (input[i] === transponded[j].newNew) {
            result.push(transponded[j].alpha)
          }
        }
      }
    }return result.join('') 


  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;

