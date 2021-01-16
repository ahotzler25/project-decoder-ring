const polybiusSquare = {
    "a": "11", "b": "21", "c": "31", "d": "41", "e": "51",
    "f": "12", "g": "22", "h": "32", "i": "42", "j": "42", "k": "52",
    "l": "13", "m": "23", "n": "33", "o": "43", "p": "53", 
    "q": "14", "r": "24", "s": "34", "t": "44", "u": "54", 
    "v": "15", "w": "25", "x": "35", "y": "45", "z": "55"
};

function polybius(input, encode = true) {

    if (!input) return false;
    let result = "";

    const lowerCaseInput = input.toLowerCase();

    // Encode
    if (encode) {
        for (let i = 0; i < lowerCaseInput.length; i++) {
            let currentChar = lowerCaseInput[i];

            if (currentChar === 'i' || currentChar === 'j') {
                result += polybiusSquare['i'];
            } else if (currentChar === ' ') {
                result += ' ';
            } else {
                let match = Object.entries(polybiusSquare).find(pair => currentChar === pair[0]);
                result += match[1];
            };
        };
    } else { 
    // Decode
        let count = 0;
        for (let j = 0; j < input.length; j++) {
            if (input[j] !== ' ') {
                count++;
            };
        };

        // Checking to make sure the input is an even number for cipher
        if (count % 2 !== 0) {
            return false;
        };

        for (let k = 0; k < input.length; k += 2) {
            let decoded = `${input[k]}${input[k + 1]}`;
            if (decoded.includes(' ')) {
                result += ' ';
                k -= 1;
            } else if (decoded === '42') {
                result += '(i/j)';
            } else { // Do I need to refactor this? Getting long, but working
                let charFound = Object.entries(polybiusSquare).find((char) => decoded === char[1]);
                if (charFound) {
                    result += charFound[0];
                };
            };
        };
    };

    return result;
};


module.exports = polybius;
