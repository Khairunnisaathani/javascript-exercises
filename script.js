// Exercise 1: Array Operations
let numbers = [10, 20, 30, 40, 50];

console.log("Exercise 1: Array Operations");
console.log("Numbers:", numbers);


// Exercise 2: Find the Largest Number
let values = [15, 45, 25, 60, 35];

let largest = Math.max(...values);

console.log("Exercise 2: Largest Number");
console.log("Largest number:", largest);


// Exercise 3: Filter Even Numbers
let nums = [1, 2, 3, 4, 5, 6, 7, 8];

let evenNumbers = nums.filter(num => num % 2 === 0);

console.log("Exercise 3: Even Numbers");
console.log("Even numbers:", evenNumbers);


// Exercise 4: Object Properties
let person = {
    name: "Khairunnisa",
    age: 21,
    city: "Haveri"
};

console.log("Exercise 4: Object Properties");
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("City:", person.city);


// Exercise 5: Student Details
let student = {
    name: "Ayesha",
    course: "Computer Science",
    marks: 85
};

console.log("Exercise 5: Student Details");
console.log("Name:", student.name);
console.log("Course:", student.course);
console.log("Marks:", student.marks);


// Exercise 6: Add Two Numbers
function addNumbers(a, b) {
    return a + b;
}

let sum = addNumbers(10, 20);

console.log("Exercise 6: Add Two Numbers");
console.log("Sum:", sum);


// Exercise 7: Check Even or Odd
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log("Exercise 7: Even or Odd");
console.log("10 is:", checkEvenOdd(10));
console.log("7 is:", checkEvenOdd(7));


// Exercise 8: Reverse a String
function reverseString(text) {
    return text.split("").reverse().join("");
}

let originalText = "JavaScript";

console.log("Exercise 8: Reverse a String");
console.log("Original:", originalText);
console.log("Reversed:", reverseString(originalText));


// Exercise 9: Change Text Using DOM
function changeText() {
    document.getElementById("result9").textContent =
        "The text has been changed!";
}

console.log("Exercise 9: Change Text Using DOM");


// Exercise 10: Button Click Counter
let count = 0;

function increaseCounter() {
    count++;

    document.getElementById("counter").textContent = count;

    console.log("Exercise 10: Button Click Counter");
    console.log("Count:", count);
}