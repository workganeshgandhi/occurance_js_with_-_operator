The line:

Javascript

Copy code
result[num] = (result[num] || 0) + 1;
is a JavaScript idiom for counting occurrences of values (like a frequency map).

How it works
result[num]

Looks up the current count for the key num in the result object.
If result[num] is undefined (meaning num hasn’t been counted yet), it’s a falsy value.
result[num] || 0

Uses the logical OR (||) operator to provide a default value.
If result[num] is falsy (e.g., undefined, null, 0), it will use 0 instead.
This ensures we start counting from zero.
+ 1

Increments the count by 1.
Assignment

Stores the updated count back into result[num].
Example
Javascript

Copy code
const numbers = [2, 3, 2, 5, 3, 2];
const result = {};

for (let num of numbers) {
    result[num] = (result[num] || 0) + 1;
}
console.log(result);
// Output: { '2': 3, '3': 2, '5': 1 }
Why use (result[num] || 0)?
Without it, trying to increment undefined would result in NaN:

Javascript

Copy code
let x;
x = x + 1; // NaN
Using || 0 ensures we start from zero safely. 
To initialize and increment a counter for a given key in JavaScript, using the || operator to handle missing values 
1
.
