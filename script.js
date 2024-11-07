let numbers = [50, 55, 60, 65, 70]

console.log(numbers[0]);

console.log([numbers.length - 1]);

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

numbers.push(80, 85, 90, 95, 100);
console.log(numbers);

numbers.pop();
numbers.pop();
numbers.pop();
console.log(numbers);

let myString = "Hello..."
console.log(myString.length);

/*************************************************/

let hundreds = [100, 200, 300, 400, 500];

console.log(hundreds.length);
console.log(hundreds[0]);
console.log(hundreds[hundreds.length - 1]);

for (let i = 0; i < hundreds.length; i++) {
    console.log(hundreds[i]);
}

hundreds.unshift(600, 700, 800, 900, 1000);
console.log

hundreds.shift();
hundreds.shift();
hundreds.shift();
console.log(hundreds);

let LETO = "Hello by the hundreds"
console.log(LETO.length);

/* Results 
8
script.js:20
5
script.js:26
100
script.js:27
500
script.js:28
100
script.js:31
200
script.js:31
300
script.js:31
400
script.js:31
500
script.js:31
(7) [900, 1000, 100, 200, 300, 400, 500]
script.js:40
21
script.js:43
*/