const { substitutionDB } = require('./db');

function substitution(input, alphabet, encode = true) {

    // Checking alphabet length
    if (alphabet.length !== 26) return "Return is not long enough.";
    
    // Checking for duplicate letters in alphabet
    for (let i = 0; i < alphabet.length; i++) {
        for (let j = [i + 1]; j < alphabet.length; j++) {
            if (alphabet[i] === alphabet[j]) {
                return false;
            };
        };
    };

    const realAlphabet = "abcdefghijklmnopqrstuvwxyz";
    // Sample alphabet = "plmoknijbuhvygctfxrdzeswaq"; 
    // Sample input = "A b C"

    // Need to refactor with array methods for clarity/readability
    // If alphabet length is 26 and no dupe letters, return flattened array
    //Encode 
    let finalArray = [];

    if (encode === true) {
    
        for (let i = 0; i < input.length; i++) {
            for (let j = 0; j < alphabet.length; j++) {
                if (input.charCodeAt(i) < 65 || input.charCodeAt(i) > 122 || input.charCodeAt(i) > 91 && input.charCodeAt(i) < 97) {
                    finalArray.push(input[i]);
                    break;
                } else if (input.charCodeAt(i) > 64 && input.charCodeAt(i) < 91) {
                    if (input.charCodeAt(i) === (realAlphabet.charCodeAt(j) - 32)) {
                        finalArray.push((String.fromCharCode((alphabet.charCodeAt(j) - 32))));
                    };
                } else if (input[i] === realAlphabet[j]) {
                    finalArray.push(alphabet[j]);
                };
            };
        };
    };

    // Decode
    if (encode === false) {
    
        for (let i = 0; i < input.length; i++) {
            for (let j = 0; j < alphabet.length; j++) {
                if (input.charCodeAt(i) < 65 || input.charCodeAt(i) > 122 || input.charCodeAt(i) > 91 && input.charCodeAt(i) < 97) {
                    finalArray.push(input[i]);
                    break;
                } else if (input.charCodeAt(i) > 64 && input.charCodeAt(i) < 91) {
                    if (input.charCodeAt(i) === (alphabet.charCodeAt(j) - 32)) {
                        finalArray.push((String.fromCharCode((realAlphabet.charCodeAt(j) -32 ))));
                    };
                } else if (input[i] === alphabet[j]) {
                    finalArray.push(realAlphabet[j]);
                } 
            };
        };
    };

    return finalArray.join('');
};



module.exports = substitution;
