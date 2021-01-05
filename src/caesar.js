// Helper function checking shift
function shiftTests(shift) {
    // (shift === 0 || shift < -25 || shift > 25 || !shift) ? false : true;
    if (shift === 0 || shift < -25 || shift > 25 || !shift) {
        return false;
    } else {
        return true;
    };
};


// Return false if shift = 0, shift < -25, shift > 25, or absent
// Ignores capital letters; return message "A Message" === "a message"
// If shifting right goes past end of alphabet, wrap back around
// Maintains spaces and nonalphabetic symbols before/after encoding/decoding


// Working; refactor later
function caesar(input, shift, encode = true) {
// Calls helper function to test shift values
    if (!shiftTests(shift)) {
        return false;
    };

    let myCipher = [];

    // ENCODING
    if (encode) {
        for (let i = 0; i < input.length; i++) {
           // Test for uppercase
           if (input.charCodeAt(i) > 64 && input.charCodeAt(i) < 91) {
            if ((input.charCodeAt(i) + shift) > 90) {
                myCipher.push(String.fromCharCode((input.charCodeAt(i) + shift) - 26));
            } else {
                myCipher.push(String.fromCharCode(input.charCodeAt(i) + shift))
            };
        };

            // Test for lowercase
            if (input.charCodeAt(i) > 96 && input.charCodeAt(i) < 123) {
                if ((input.charCodeAt(i) + shift) > 122) {
                    myCipher.push(String.fromCharCode((input.charCodeAt(i) + shift) - 26));
                } else {
                    myCipher.push(String.fromCharCode(input.charCodeAt(i) + shift));
                }
            } else if (input.charCodeAt(i) > 31 && input.charCodeAt(i) < 65) {
                myCipher.push(input.charAt(i));
            };
        };

        // DECODING
    } else { 
        for (let i = 0; i < input.length; i++) {
            // Test for uppercase
            if (input.charCodeAt(i) > 64 && input.charCodeAt(i) < 91) {
                if (input.charCodeAt(i) - shift < 65) {
                    myCipher.push(String.fromCharCode((input.charCodeAt(i) - shift) + 26));
                } else {
                    myCipher.push(String.fromCharCode(input.charCodeAt(i) - shift));
                };
            };

            // Test for lowercase
            if (input.charCodeAt(i) > 96 && input.charCodeAt(i) < 123) {
                if (input.charCodeAt(i) - shift < 97) {
                    myCipher.push(String.fromCharCode((input.charCodeAt(i) - shift) + 26));
                } else {
                    myCipher.push(String.fromCharCode(input.charCodeAt(i) - shift));
                }
            } else if (input.charCodeAt(i) < 65 || input.charCodeAt(i) > 123) {
                myCipher.push(input.charAt(i));
            };
        };
    };

    return myCipher.join("");
};

module.exports = caesar;
