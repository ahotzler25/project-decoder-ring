// Helper function checking shift
function shiftTests(shift) {
    // (shift === 0 || shift < -25 || shift > 25 || !shift) ? false : true;
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
        return false;
    } else {
        return true;
    };
};

const alphabet = "abcdefghijklmnopqrstuvwxyz";

// Think about refactoring
function caesar(input, shift, encode = true) {

// Checks to ensure input was provided
    if (!input) return false;

// Calls helper function to test shift values
    if (!shiftTests(shift)) {
        return false;
    };


    let lowerCaseInput = input.toLowerCase();
    let myCipher = [];


    for (let i = 0; i < lowerCaseInput.length; i++) {
        for (let j = 0; j < alphabet.length; j++) {
            if (!alphabet.includes(lowerCaseInput[i])) {
                myCipher.push(lowerCaseInput[i]);
                break;
            };

            if (alphabet[j] === lowerCaseInput[i]) {
                let shiftedLetter = j + shift;
                
                if (!encode) {
                    shiftedLetter = j - shift
                };

                if (shiftedLetter < 0) {
                    shiftedLetter += 26;
                    myCipher.push(alphabet[shiftedLetter]);
                } else if (shiftedLetter > 25) {
                    shiftedLetter -= 26;
                    myCipher.push(alphabet[shiftedLetter]);
                } else {
                    myCipher.push(alphabet[shiftedLetter]);
                }
            }

        };
    };  

    return myCipher.join("");
};

module.exports = caesar;
