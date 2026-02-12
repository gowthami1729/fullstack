Task 1 – forEach()
🔹 Question:

Use forEach() to print:
Subject 1: Maths … Subject 4: History
Store result in a variable.
Why does forEach() return undefined?

🔹 Answer:
let subjects = ["Maths", "Science", "English", "History"];

let result = subjects.forEach((subject, index) => {
    console.log(`Subject ${index + 1}: ${subject}`);
});

console.log(result); // undefined


Reason:
forEach() does not return a new array.
It only executes the function for each element.
So it returns undefined.

Task 2 – map()
🔹 Question:

Use map() to add 10% GST.
Expected Output: [110, 220, 330, 440]

🔹 Answer:
let prices = [100, 200, 300, 400];

let newPrices = prices.map(price => price + price * 0.10);

console.log(newPrices);


Output:

[110, 220, 330, 440]

Task 3 – filter()
🔹 Question:

Use filter() to get students scoring above 50.

🔹 Answer:
let students = [
 { name: "A", marks: 45 },
 { name: "B", marks: 75 },
 { name: "C", marks: 35 },
 { name: "D", marks: 85 }
];

let result = students.filter(student => student.marks > 50);

console.log(result);


Output:

[
 { name: "B", marks: 75 },
 { name: "D", marks: 85 }
]

Task 4 – find()
🔹 Question:

Use find() to get first student scoring above 50.
What is difference between filter() and find()?

🔹 Answer:
let result = students.find(student => student.marks > 50);

console.log(result);


Output:

{ name: "B", marks: 75 }


Difference:

filter() → returns all matching elements (array)

find() → returns first matching element (single object)

 Task 5 – reduce()
🔹 Question:

Calculate total price using reduce().
Bonus: Add 5% tax.

🔹 Answer:
let cart = [
 { item: "Shirt", price: 1000 },
 { item: "Shoes", price: 2000 },
 { item: "Watch", price: 3000 }
];

let total = cart.reduce((sum, item) => sum + item.price, 0);

console.log(total); // 6000

Bonus:
let totalWithTax = cart.reduce((sum, item) => sum + item.price * 1.05, 0);

console.log(totalWithTax); // 6300

 Task 6 – some()
🔹 Question:

Check if at least one number is even.

🔹 Answer:
let numbers = [1, 3, 5, 7, 8];

let result = numbers.some(num => num % 2 === 0);

console.log(result); // true

 Task 7 – every()
🔹 Question:

Check if all ages are above 18.

🔹 Answer:
let ages = [22, 25, 19, 30];

let result = ages.every(age => age > 18);

console.log(result); // true

 Task 8 – sort()
🔹 Question:

Sort ascending and descending.
Why does normal sort() fail?

🔹 Answer:
let salaries = [50000, 10000, 70000, 30000];

// Ascending
salaries.sort((a, b) => a - b);
console.log(salaries);

// Descending
salaries.sort((a, b) => b - a);
console.log(salaries);


Reason:
Normal sort() converts numbers into strings and sorts alphabetically.

 Task 9 – Array Conversion
🔹 Question:

Convert array using toString() and join("-").

🔹 Answer:
let arr = [10, 20, 30, 40];

console.log(arr.toString());
// "10,20,30,40"

console.log(arr.join("-"));
// "10-20-30-40"

 SECTION 2 – String Methods
 Task 10 – charAt() & charCodeAt()
🔹 Question:

Get character and ASCII value at index 4.

🔹 Answer:
let word = "Developer";

console.log(word.charAt(4)); 
// l

console.log(word.charCodeAt(4)); 
// 108

 Task 11 – slice()
🔹 Question:

Extract "Company".

🔹 Answer:
let company = "StacklyCompany";

let result = company.slice(7);

console.log(result);
// Company

 Task 12 – Case Conversion
🔹 Answer:
let userInput = "javaScript";

console.log(userInput.toUpperCase());
// JAVASCRIPT

console.log(userInput.toLowerCase());
// javascript

 Task 13 – trim()
let email = "   naveen@gmail.com   ";

console.log(email.trim());
// naveen@gmail.com

 Task 14 – includes()
let message = "Welcome to JavaScript Training";

console.log(message.includes("JavaScript"));
// true

 Task 15 – split()
let movie = "spider-man-no-way-home";

let result = movie.split("-");

console.log(result);
// ["spider", "man", "no", "way", "home"]

 Task 16 – indexOf() & lastIndexOf()
let text = "programming";

console.log(text.indexOf("m"));     // 6
console.log(text.lastIndexOf("m")); // 7

 Task 17 – replace()
let tech = "I love python";

let result = tech.replace("python", "javascript");

console.log(result);
// I love javascript

 Task 18 – startsWith() & endsWith()
let filename = "report.pdf";

console.log(filename.startsWith("report")); // true
console.log(filename.endsWith(".pdf"));     // true

 Task 19 – repeat()
let star = "*";

console.log(star.repeat(10));
// **********

 FINAL TEAM CHALLENGE – Employee Report System
🔹 Question:

Perform all operations using map(), filter(), find(), reduce(), sort().

🔹 Answer:
let employees = [
 { name: "Naveen", salary: 50000 },
 { name: "Arun", salary: 30000 },
 { name: "Kiran", salary: 70000 }
];

// 1. Convert names to uppercase
let upperNames = employees.map(emp => ({
    ...emp,
    name: emp.name.toUpperCase()
}));

console.log(upperNames);

// 2. Filter salary > 40000
let highSalary = employees.filter(emp => emp.salary > 40000);
console.log(highSalary);

// 3. Find first salary > 60000
let firstHigh = employees.find(emp => emp.salary > 60000);
console.log(firstHigh);

// 4. Total salary
let totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log(totalSalary);

// 5. Sort descending
let sorted = [...employees].sort((a, b) => b.salary - a.salary);
console.log(sorted);