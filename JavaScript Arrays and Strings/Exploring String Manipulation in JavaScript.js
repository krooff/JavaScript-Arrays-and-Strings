//Task 1: Obtaining String Length
let message = "Hello, World!";

// Using length property to get string length
console.log('Length of message:', message.length);  // 13

//Task 2: Converting Cases
let text = "Hello, World!";

// Converting to uppercase
let upperCaseText = text.toUpperCase();
console.log('Uppercase:', upperCaseText);  // 'HELLO, WORLD!'

// Converting to lowercase
let lowerCaseText = text.toLowerCase();
console.log('Lowercase:', lowerCaseText);  // 'hello, world!'

//Task 3: Extracting Substrings
let sentence = "The quick brown fox jumps over the lazy dog";

// Extracting a substring using substring method
let extracted = sentence.substring(10, 15);
console.log('Extracted substring:', extracted);  // 'brown'

//Task 4: Splitting Strings
let sentence2 = "The quick brown fox";

// Splitting the string into an array of words
let words = sentence2.split(' ');
console.log('Array of words:', words);  // ['The', 'quick', 'brown', 'fox']
