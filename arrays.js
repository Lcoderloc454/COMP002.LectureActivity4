let myGrades = [75, 80, 90, 100];

console.log(myGrades.length);
console.log(myGrades[0]);
console.log(myGrades[myGrades.length - 1]);

for (let i = 0; i < myGrades.length; i++) {
    console.log(myGrades[i]);
}

function traverse(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function separator(inputChar, length) {
    console.log(inputChar.repeat(length));
}

console.log("Current myGrades");
traverse(myGrades);
separator("*", 50);

myGrades.push(62);
console.log("myGrades value after adding an item:");
traverse(myGrades);
separator("*", 50);

myGrades.pop();
console.log("MyGrades value after removing an item:");
traverse(myGrades);
separator("*", 50);

function iterate(array) {
    divider ("*", 25)
}

function divider (character, size){
    let output = "";
}

// there is features that will use push first and then pop and LIFO will be in a stack and there will be also shift and unshift but unshift will go first to add elements and shift will remove the second item so thats why unshift will go first and shift will go last. And for the assignment use Push and Pop and then use Unshift and shift. 