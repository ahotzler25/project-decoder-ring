// Write your tests here!
const expect = require('chai').expect;
const polybius = require('../src/polybius');

describe('polybius', () => {
    it('return false if no input is provided', () => { 
        const expected = false;
        const actual = polybius();
        expect(actual).to.be.false;
    });
    it('should return false if decoded input is not an even number, ignoring spaces', () => {
        const input = "3251131343 25432413419";
        const encode = false;

        const expected = false;
        const actual = polybius(input, encode);
        expect(actual).to.be.false;
    }) 
    it ('should return encoded input', () => {
        const input = "abc";
        const encode = true;

        const expected = "112131";
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    });
    it ('should return decoded message "Thinkful"', () => {
        const input = "4432423352125413";
        const encode = false;

        const expected = "th(i/j)nkful";
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    });
    it ('should maintain spaces', () => {
        const input = "Pink Floyd";
        const encode = true;

        const expected = "53423352 1213434541";
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    });
    it ('should ignore capital letters', () => {
        const input = "PINK FLOYD";
        const encode = true;

        const expected = "53423352 1213434541";
        const actual = polybius(input, encode);
        expect(actual).to.eql(expected);
    });
    it ('should properly encode "i"/"j" to "42"', () => {
        const input = "Pink Floyd";
        const encode = true;

        const expected = "53423352 1213434541";
        const actual = polybius(input, encode);
        expect(actual).to.equal(expected);
    })
    it ('should properly format (i/j) when decoding', () => {
        const input = "53423352 1213434541";
        const encode = false;

        const expected = "p(i/j)nk floyd";
        const actual = polybius(input, encode);
        expect(actual).to.eql(expected);
    })
})