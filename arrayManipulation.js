// Created the array with atleast 5 integers
const numbers = [1, 2, 3, 4, 5];
// Added a new element to last of the array
numbers.push(6);
console.log(numbers);
// Removed the first element from the array
numbers.shift(0);
console.log(numbers);
// Reverse the array
numbers.reverse();
console.log(numbers);
// Join the array elements into a string with comma as a seperator
let num = numbers.join();
console.log(num);
// Used the map function to create a new array(squared numbers) containing the square  of each number in the numbers array
let squaredNumbers = numbers.map(function (numbers) {
  return numbers * numbers;
});
console.log(squaredNumbers);
