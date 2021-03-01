// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  
  // you can add any code you want within this function scope
 // const alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ];
  
  
  function caesar(input, shift, encode = true ) {
    if (shift > 25 || shift < -25 || !shift) {
      //shift number must be less than 25 or greater than -25 and it can't be zero or else return false
      return false;
    }
    let returnResult = "";
    //return result var 
    input = input.toLowerCase(); //make sure input is lower case 
    for (let i = 0; i < input.length; i++) {
      //loop through input
      let theSwap = input[i].charCodeAt(); //assinging input[i] an integer and storing in var
      
      if (theSwap < 65 || theSwap > 122 || input[i] === " ") {
        //limit 
        returnResult += input[i]; //add input to return var
        //console.log('check', returnResult);
      } else {
        let shifter; //empty storage var
        //console.log('the swap', theSwap);
        if (encode) {
          //if encode is true then..
          shifter = theSwap + shift; //shift the characters forward + 
         // console.log('check shift', shift);
         // console.log('shifter', shifter);

        } else {
          shifter = theSwap - shift;  
        }
        //lock in values 
        if (shifter > 122) {
          shifter -= 26; 
        } else if (shifter < 97) {
          shifter += 26; //else 
        }
        let solution = String.fromCharCode(shifter); //convert to string
        console.log(solution);
        returnResult += solution; //add converted string to return var 
      }
    }

    return returnResult; //return return var
 
  }

  return {
    caesar,
  };
})();



module.exports = caesarModule.caesar;


