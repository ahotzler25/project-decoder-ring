// Write your tests here!

const expect = require('chai').expect;
const substitution = require('../src/substitution');

describe('substitution', () => {
    it ('should return string if alphabet length is not 26', () => {
        const alphabet = "plmoknijbuhvygctfxrdzeswa";
        const input = "ykrrpik";
        const encode = true;

        const expected = "Return is not long enough.";
        const actual = substitution(input, alphabet, encode);
        expect(actual).to.equal(expected);
    });
    it ('should return false if alphabet contains duplicate letters', () => {
        const alphabet = ["p", "l", "m", "o", "k", "n", "i", "j", "b", "u", "h", "v", "y", "g", "c", "t", "f", "x", "r", "d", "z", "e", "s", "w", "q", "q"];
        const input = "ykrrpik";
        const encode = true;

        const expected = false;
        const actual = substitution(input, alphabet, encode);
        expect(actual).to.be.false;
    });
    it('should encode to plm', () => {
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const input = "abc";
        const encode = true;

        const expected = "plm";
        const actual = substitution(input, alphabet, encode);
        expect(actual).to.equal(expected);
    })
    it('should decode to "message"', () => {
        const alphabet = ["p", "l", "m", "o", "k", "n", "i", "j", "b", "u", "h", "v", "y", "g", "c", "t", "f", "x", "r", "d", "z", "e", "s", "w", "a", "q"];
        const input = "ykrrpik";
        const encode = false;

        const expected = "message";
        const actual = substitution(input, alphabet, encode);
        expect(actual).to.equal(expected);
    });
    it('should maintain spaces in string return', () => {
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const input = "a b c";
        const encode = true;

        const expected = "p l m";
        const actual = substitution(input, alphabet, encode);
        expect(actual).to.equal(expected);
    });
    it('maintains capital letters whilst encoding', () => {
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const input = "A b C";
        const encode = true;

        const expected = "P l M";
        const actual = substitution(input, alphabet, encode);
        expect(actual).to.equal(expected);
    })
});