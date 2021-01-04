const { db } = require('./db');



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

    // If alphabet length is 26 and no dupe letters, return string
    return "message";
}



module.exports = substitution;
