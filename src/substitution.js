const { db } = require('./db');



function substitution(input, alphabet, encode = true) {
    console.log(alphabet);
    if (alphabet.length != 26) false;
    
    // Checking for duplicate letters in alphabet
    for (let i = 0; i < alphabet.length; i++) {
        for (let j = 1; j < alphabet.length; j++) {
            if (alphabet[i] === alphabet[j]) {
                return false;
            };
        };
    };

    return "message";
}



module.exports = substitution;
