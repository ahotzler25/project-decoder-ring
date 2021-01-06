// Write your tests here!
const expect = require('chai').expect;
const caesar = require('../src/caesar');
//const substitutionDB = require('../src/db');

describe('caesar', () => {
    it('should return false if shift value is equal to 0, less than -25, greater than 25, or not present', () => {
        const shift = 0;
        const input = "test";
        const encode = true;

        const expected = false;
        const actual = caesar(input, shift, encode);
        expect(actual).to.equal(expected);
    });
    it('should return alphabet + shift', () => {
        const shift = 3;
        const input = "abcdefghijklmnopqrstuvwxyz";
        const encode = true;
        // const db = substitutionDB;

        const expected = "defghijklmnopqrstuvwxyzabc";
        const actual = caesar(input, shift, encode);
        expect(actual).to.equal(expected);
    });
    it('should decode string (upper and lowercase) and maintains nonalphabetic chars', () => {
        const shift = 1;
        const input = "Uijolgvm jt OPU csplfo!";
        const encode = false;

        const expected = "Thinkful is NOT broken!";
        const actual = caesar(input, shift, encode);
        expect(actual).to.equal(expected);
    })
})