//   Create a string varibale named message with the value "Hello World"
const message = "Hello World!";
// Extract and log the substring 'Hello' from the messsage
let result = message.slice(5);
console.log(result);
//  Convert the entire string to upperCase
let upper = message.toUpperCase();
console.log(upper);
// Check if the string contains the word "World" case-sensitive
const search = "World";
if (message.includes(search)) {
  console.log(`The string conatins the word "${search}" is (case-sensitive)`);
} else {
  console.log(
    `The string does not contain the word "${search}" (case-sensitive)`
  );
}
// Replace "World" with your name in the string
const replacement = "Anas";
const updatedMessage = message.replace(search, replacement);
console.log(updatedMessage);
//   Use the map function to create an array of characters from the string
const charArr = message.split("").map((char) => char);
console.log(charArr);
