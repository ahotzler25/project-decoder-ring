// Write your tests here!

const expect = require('chai').expect;
const substitution = require('../src/substitution');

describe('substitution', () => {
    it ('should return false if alphabet length is not 26', () => {
        const alphabet = "plmoknijbuhvygctfxrdzeswa";
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
    it('should return false if no input is provided', () => {
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const encode = true;

        const expected = false;
        const actual = substitution(alphabet, encode);
        expect(actual).to.be.false;
    });
    it('should return false if no alphabet is provided', () => {
        const input = "Hello world!";
        const encode = true;

        const expected = false;
        const actual = substitution(input, encode);
        expect(actual).to.be.false;
    })
    it('should correctly encode inputted phrase', () => {
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const input = "abc";
        const encode = true;

        const expected = "plm";
        const actual = substitution(input, alphabet, encode);
        expect(actual).to.equal(expected);
    })
    it('should correctly decode inputted phrase', () => {
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
        expect(actual).to.eql(expected);
    });
    it('should ignore capital letters', () => {
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const input = "A b C";
        const encode = true;

        const expected = "p l m";
        const actual = substitution(input, alphabet, encode);
        expect(actual).to.eql(expected);
    });
    it('should encode input where alphabet contains non-alphanumeric chars', () => {
        const alphabet = "pl$oknijbuhvygctfxrdzeswaq";
        const input = "abc d";
        const encode = true;

        const expected = "pl$ o";
        const actual = substitution(input, alphabet, encode);
        expect(actual).to.equal(expected);
    });
    it('Should allow the alphabet to contain symbols and special characters', () => {
        const expected = 'jr$fscpw';
        const actual = substitution('thinkful', 'xoyqmcgr$kswaflnthdjpzibev');
        expect(actual).to.equal(expected);
    
        const expected1 = 'thinkful';
        const actual1 = substitution('jr$fscpw', 'xoyqmcgr$kswaflnthdjpzibev', false);
        expect(actual1).to.equal(expected1);
      });
});