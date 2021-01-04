// Write your tests here!

const expect = require('chai').expect;
const substitution = require('../src/substitution');

describe('substitution', () => {
    it ('should return false if alphabet length is not 26', () => {
        const alphabet = ["p", "l", "m", "o", "k", "n", "i", "j", "b", "u", "h", "v", "y", "g", "c", "t", "f", "x", "r", "d", "z", "e", "s", "w", "a"];
        const input = "ykrrpik";
        const encode = true;

        const expected = false;
        const actual = substitution(input, alphabet, encode);
        expect(actual).to.be.false;
    });
    it ('should return false if alphabet contains duplicate letters', () => {
        const alphabet = ["p", "l", "m", "o", "k", "n", "i", "j", "b", "u", "h", "v", "y", "g", "c", "t", "f", "x", "r", "d", "z", "e", "s", "w", "q", "q"];
        const input = "ykrrpik";
        const encode = true;

        const expected = false;
        const actual = substitution(input, alphabet, encode);
        expect(actual).to.be.false;
    });
    it('should decode to "message"', () => {
        const alphabet = ["p", "l", "m", "o", "k", "n", "i", "j", "b", "u", "h", "v", "y", "g", "c", "t", "f", "x", "r", "d", "z", "e", "s", "w", "a", "q"];
        const input = "ykrrpik";
        const encode = true;

        const expected = "message";
        const actual = substitution(input, alphabet, encode);
        expect(actual).to.equal(expected);
    });
})