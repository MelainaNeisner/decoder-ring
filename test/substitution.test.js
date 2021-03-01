// Write your tests here!
const substitution = require("../src/substitution");
const {expect} = require("chai");

//returns false if given alphabet that isnt exactly 26 chars long
//must correctly translate the given phrase based on the alphabet func
//return false if there are dups
//keep the spaces (encode and decode)
//ignore capitals

describe("substition()", () =>{
        it("should return false if given an alphabet that isn't exactly 26 characters long", ()=>{
            const actual = substitution("thinkful");
            const expected = false;
            expect(actual).to.be.eql(expected); 
        });
        it("should correctly translate the give phrase based on the alphabet func", () => {
            const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
            const expected = "thinkful";
            expect(actual).to.be.eql(expected);
        });
        it('should return flase if there are dublicate letters in the substituion alphabet', () =>{
            const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
            const expected = false;
            expect(actual).to.be.eql(expected);
        });
        it("should maintain spaces between words", () =>{
            const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
            const expected = "elp xhm xf mbymwwmfj dne";
            expect(actual).to.be.eql(expected);
        });
        it("should ignore capital letters", () => {
            const actual = substitution("tHINKFUL", "xoyqmcgrukswaflnthdjpzibev");
            const expected = "jrufscpw";
            expect(actual).to.be.eql(expected);
        });

})