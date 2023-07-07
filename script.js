https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
function arrayDiff(array1, array2) {
// Handle edge cases: (a) If the length of “array1” is 0, return an empty array
if(array1.length === 0){return []}
// Handle edge cases: (b) If the length of “array2” is 0, return “array1”
if(array2.length === 0){return array1}


// Create the array to return called “returnArray”
let returnArray = [];
// Loop through “array1”
array1.forEach(function included(element){
// If the element is not included in “array2”, push it to “returnArray”
if(!array2.includes(element)){returnArray.push(element)}
})

// Return “returnArray”
return returnArray;
}
