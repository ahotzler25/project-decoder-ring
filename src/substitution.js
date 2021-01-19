const realAlphabet = "abcdefghijklmnopqrstuvwxyz";

function substitution(input, alphabet, encode = true) {
    // Should I run these tests in helper function? 
    // Checking alphabet length
    if (!alphabet || !input || alphabet.length !== 26) return false;
    
    const lowerCaseInput = input.toLowerCase();

    // Checking for duplicate letters in alphabet
    for (let i = 0; i < alphabet.length; i++) {
        for (let j = [i + 1]; j < alphabet.length; j++) {
            if (alphabet[i] === alphabet[j]) {
                return false;
            };
        };
    };

    // Need to refactor with array methods for clarity/readability
    // If alphabet length is 26 and no dupe letters, return flattened array

    //Encoding
    let finalArray = [];

    if (encode) {
    
        for (let i = 0; i < lowerCaseInput.length; i++) {
            for (let j = 0; j < alphabet.length; j++) {
                if (lowerCaseInput.charCodeAt(i) < 65 || lowerCaseInput.charCodeAt(i) > 122) {
                    finalArray.push(lowerCaseInput[i]);
                    break;
                } else if (lowerCaseInput.charCodeAt(i) > 64 && lowerCaseInput.charCodeAt(i) < 91) {
                    if (lowerCaseInput.charCodeAt(i) === (realAlphabet.charCodeAt(j) - 32)) {
                        finalArray.push((String.fromCharCode((alphabet.charCodeAt(j) - 32))));
                    };
                } else if (lowerCaseInput[i] === realAlphabet[j]) {
                    finalArray.push(alphabet[j]);
                };
            };
        };
    };

    // Decoding
    if (!encode) {
    
        for (let i = 0; i < lowerCaseInput.length; i++) {
            for (let j = 0; j < alphabet.length; j++) {
                if (lowerCaseInput.charCodeAt(i) === 32) {
                    finalArray.push(lowerCaseInput[i]);
                    break;
                } else if (lowerCaseInput.charCodeAt(i) > 64 && lowerCaseInput.charCodeAt(i) < 91) {
                    if (lowerCaseInput.charCodeAt(i) === (alphabet.charCodeAt(j) - 32)) {
                        finalArray.push((String.fromCharCode((realAlphabet.charCodeAt(j) -32 ))));
                    };
                } else if (lowerCaseInput[i] === alphabet[j]) {
                    finalArray.push(realAlphabet[j]);
                } 
            };
        };
    };

    return finalArray.join('');
};



module.exports = substitution;
