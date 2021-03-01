// Write your tests here!
const polybius = require("../src/polybius");
const {expect} = require("chai");
const { describe } = require("mocha");

describe("polybius()", () => {
    describe("encode:", () => {
        it("should be a string", () => {
            const actual = "vermillion";
            expect(actual).to.be.a('string');
        });
        // it("should translate i and j to 42", () => {
        //     const expected = "42";
        //     const actual = polybius("i");
        //     const actual = polybius("j");
        //     expect(actual).to.eql(expected);
        // });
        it("should translate capitals to lowercase", () => {
            const expected = "3251131343 2543241341"
            const actual = polybius("Hello World");
            expect(actual).to.eql(expected);
        });
    });
    describe("decode", () => {
        it('should return a string', () => {
            const actual = "3251131343 2543241341"
            expect(actual).to.be.a("string");
        });
        it("should translate 42 to (i/j)", () => {
            const expected = "th(i/j)nkful";
            const actual = polybius("4432423352125413", false);
            expect(actual).to.eql(expected);
        });
        it("should maintain spaces in messages", () =>{
            const expected = "hello world";
            const actual = polybius("3251131343 2543241341", false);
            expect(actual).to.eql(expected);

        })
    })

});





//encode:
//it should return a string
// translate i and j to 42
//ignore capital letters
//maintains spaces in messagaes 
//it should translate letters to approrpriate numbers

//decode:
//it should return a string
//the number of characters input, excluding spaces, should be even..else false

//translate 42 to i/j
//maintains spaces in messages



 