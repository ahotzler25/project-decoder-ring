// Write your tests here!
const expect = require('chai').expect;
const caesar = require('../src/caesar');
//const substitutionDB = require('../src/db');

describe('caesar', () => {
    it('should return false if shift value is equal to 0', () => {
        const shift = 0;
        const input = "test";
        const encode = true;

        const actual = caesar(input, shift, encode);
        expect(actual).to.be.false;
    });    
    it('should return false if shift value is less than -25', () => {
        const shift = -55;
        const input = "test";
        const encode = true;

        const actual = caesar(input, shift, encode);
        expect(actual).to.be.false;
    });    
    it('should return false if shift value is greater than 25', () => {
        const shift = 55;
        const input = "test";
        const encode = true;

        const actual = caesar(input, shift, encode);
        expect(actual).to.be.false;
    });
    it('should return false if shift value or input is not present', () => {
        const encode = true;

        const actual = caesar(encode);
        expect(actual).to.be.false;
    });
    it('should correctly encode input', () => {
        const input = "pink floyd";
        const shift = 5;
        const encode = true;

        const expected = "unsp kqtdi";
        const actual = caesar(input, shift, encode);
        expect(actual).to.eql(expected);
    });
    it('should correctly decode input', () => {
        const input = "unsp kqtdi";
        const shift = 5;
        const encode = false;

        const expected = "pink floyd";
        const actual = caesar(input, shift, encode);
        expect(actual).to.eql(expected);
    })
    it('should return shifted input and wrap around to beginning of alphabet', () => {
        const shift = 3;
        const input = "abcdefghijklmnopqrstuvwxyz";
        const encode = true;

        const expected = "defghijklmnopqrstuvwxyzabc";
        const actual = caesar(input, shift, encode);
        expect(actual).to.equal(expected);
    });
    it('should ignore capital letters but maintain nonalphabetic chars', () => {
        const shift = 1;
        const input = "Uijolgvm jt OPU csplfo!";
        const encode = false;

        const expected = "thinkful is not broken!";
        const actual = caesar(input, shift, encode);
        expect(actual).to.equal(expected);
    });
    it('should maintain inputted spaces', () => {
        const shift = 3;
        const input = "KHOOR ZRUOG";
        const encode = false;

        const expected = "hello world";
        const actual = caesar(input, shift, encode);
        expect(actual).to.equal(expected);
    });
});