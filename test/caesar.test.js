// Write your tests here!
const caesar = require("../src/caesar");
const {expect} = require("chai");

describe('caesar', () => {
    it('should return false if the shift value is equal to 0, less than -25, greater, or not present', () => {
        expect(caesar('thinkful', -26)).to.eql(false);
});
    it('should ignore capital letters', () => {
        const actual = caesar('thinkful', 3);
        const expected = caesar('THINKFUL',3);
        expect(actual).to.eql(expected);
    });
});

