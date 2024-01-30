// Create two sets, set1 and set2, each containing three unique elements. const
set1 = new Set([2, 4, 6]);
const set2 = new Set([5, 7, 9]);
// Calculate theunion of set1 and set2.
const union = new Set([...set1, ...set2]);
console.log(union);
// Check if set1 is a subset of set2. const isSubset =
[...set1].every((element) => set2.has(element));
console.log(isSubset);
//Remove an element from set2.
const removeElement = set2.delete(7);
console.log(removeElement);
// Convert set1 to an array.
const arrayFromSet1 = [...set1];
console.log(arrayFromSet1);
