//Task 1: Adding and Removing Elements
// Initial array
let fruits = ['apple', 'banana', 'orange'];

// Adding a new element using push
fruits.push('grape');
console.log('After push:', fruits);  // ['apple', 'banana', 'orange', 'grape']

// Removing the last element using pop
let removedFruit = fruits.pop();
console.log('Removed fruit:', removedFruit);  // 'grape'
console.log('After pop:', fruits);  // ['apple', 'banana', 'orange']
//Task 2: Sorting Arrays
// Array of numbers in random order
let numbers = [3, 1, 5, 2, 4];

// Sorting the array in ascending order
numbers.sort((a, b) => a - b);
console.log('Sorted numbers:', numbers);  // [1, 2, 3, 4, 5]

//Task 3: Applying Array Methods
let nums = [3, 1, 5, 2, 4];

// Doubling each number using map
let doubled = nums.map(num => num * 2);
console.log('Doubled numbers:', doubled);  // [6, 2, 10, 4, 8]

// Filtering out even numbers using filter
let oddNumbers = nums.filter(num => num % 2 !== 0);
console.log('Odd numbers:', oddNumbers);  // [3, 1, 5]

// Calculating the sum using reduce
let sum = nums.reduce((acc, num) => acc + num, 0);
console.log('Sum of numbers:', sum);  // 15
