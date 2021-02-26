# project-decoder-ring
Project Decoder Ring

Live link: https://ahotzler25.github.io/project-decoder-ring/

The project consists of three ciphers, each unique to the other:
* The Caesar Shift is a type of substitution cipher originally used by Julius Caesar to protect messages of military significance. It relies on taking the alphabet and "shifting" letters to the right or left, based on the standard alphabetic order.
* The Polybius Square is a cipher that is achieved by arranging a typical alphabet into a grid. Each letter is represented through a coordinate. For example, in the above table, the letter "B" would be represented by the numerical pair "21".
* The Substitution Cipher requires a standard alphabet and a substitution alphabet. Letters from the standard alphabet will be transposed to the standard alphabet. This cipher requires that the recipient have the substitution alphabet, otherwise it will be difficult for them to decode the message.

This project was designed to test my ability to build complex algorithms in JavaScript. It also focused on my ability to write unit tests with Mocha and Chai to test algorithms. For all three ciphers I had to ensure to ignore the letter casings and maintained spaces.

For the Caesar Shift, I had to ensure a false was returned had a shift of 0, 26 or greater, or a -26 or greater was submitted. I also had to wrap around the alphabet in the event a letter shifted past "z" or behind "a".

For the Polybius Square, I had to combine the values of "i" and "j" to maintain a perfect 5x5 square of alphabetical values. "thinkful" and "thjnkful" would return the same value.

For the Substitution cipher, I had to ensure a full 26 unique characters were input for the given alphabet.
