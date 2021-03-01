// Please refrain from tampering with the setup code provided here,
// as the element.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    
    const theSquare = [
      { letter: "a", number: "11" },
      { letter: "f", number: "12" },
      { letter: "l", number: "13" },
      { letter: "q", number: "14" },
      { letter: "v", number: "15" },
      { letter: "b", number: "21" },
      { letter: "g", number: "22" },
      { letter: "m", number: "23" },
      { letter: "r", number: "24" },
      { letter: "w", number: "25" },
      { letter: "c", number: "31" },
      { letter: "h", number: "32" },
      { letter: "n", number: "33" },
      { letter: "s", number: "34" },
      { letter: "x", number: "35" },
      { letter: "d", number: "41" },
      { letter: "(i/j)", number: "42" },
      { letter: "o", number: "43" },
      { letter: "t", number: "44" },
      { letter: "y", number: "45" },
      { letter: "e", number: "51" },
      { letter: "k", number: "52" },
      { letter: "p", number: "53" },
      { letter: "u", number: "54" },
      { letter: "z", number: "55" },
    ];

    input = input.toLowerCase(); //ignore uppercase letters
    let store = ""; //storeage for vars
    const result = []; //return array
    //if encode is true then...
    if (encode) {
      for (let i = 0; i < input.length; i++) {

        if (input[i] >= "a" && input[i] <= "z") {
          //check for special characters
          store = theSquare.find((element) => element.letter.includes(input[i]));
          //running the input(letters) through the the square and matching to cooriponding number and storing it in storage
          store = store.number;
          //setting store var to to the coorisponding number (now we only have the numbers)
          result.push(store); //push numbers to store
        } 
        else {
          //deal with spaces
          result.push(input[i]);
          
        }
      }

    } else {
      //decode
      for (let i = 0; i < input.length; i++) { //
        if (!(input[i] == " ")) {
          //if the input has no spaces add input to storeage
          store += input[i];
        }
        
      }
      if (store.length % 2) {
        return false;
        //if the input does not have an even number of characters return false 
      }
      for (let i = 0; i < input.length; ) {
        //check for spaces and count the characters 
        if (!(input[i] == " ")) {
          //if there are spaces don't count the space increment by 2
          const thisNum = input[i] + input[i + 1];
          //number store to hold input
          console.log('this number', thisNum);
          store = theSquare.find((element) => element.number.includes(thisNum));
          //run thisNum through theSquare 
          store = store.letter;
          //access coresponding letter and put in storage
          i += 2;
          console.log('check store', store);
        }
        //if there are no spaces increment i by 1
        else {
          store = input[i];
          i++;
        }
        result.push(store);
      }
    }
    return result.join("");
    //return the whole dang thing
  }  
  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;




