TASK 1 – Employee Merge System (Spread Operator)
🔹 Question:

Merge both objects using spread.
Update salary to 40000.
Add experience: "2 years".
Print final object.

🔹 Answer:
let empBasic = { name: "Naveen", role: "Trainee", salary: 20000 };
let empPromotion = { role: "Developer", bonus: 10000 };

// Merge objects
let finalEmployee = {
    ...empBasic,
    ...empPromotion,
    salary: 40000,
    experience: "2 years"
};

console.log(finalEmployee);

✅ Output:
{
 name: "Naveen",
 role: "Developer",
 salary: 40000,
 bonus: 10000,
 experience: "2 years"
}

✅ TASK 2 – Shopping Cart (Spread + Array)
🔹 Question:

Merge carts, add "Bag" at end and "Socks" at beginning.

🔹 Answer:
let cart1 = ["Shoes", "Shirt"];
let cart2 = ["Watch", "Cap"];

let finalCart = ["Socks", ...cart1, ...cart2, "Bag"];

console.log(finalCart);

✅ Output:
["Socks", "Shoes", "Shirt", "Watch", "Cap", "Bag"]

✅ TASK 3 – Rest Operator Salary Calculator
🔹 Question:

Create function calculateTotalSalary(baseSalary, ...bonuses)

🔹 Answer:
function calculateTotalSalary(baseSalary, ...bonuses) {
    let totalBonus = bonuses.reduce((sum, bonus) => sum + bonus, 0);
    let total = baseSalary + totalBonus;
    return `Total Salary: ${total}`;
}

console.log(calculateTotalSalary(30000, 2000, 3000, 5000));

✅ Output:
Total Salary: 40000

✅ TASK 4 – Advanced Destructuring
🔹 Question:

Destructure name, maths and science.
Print: Rahul scored 90 in maths and 85 in science.

🔹 Answer:
let student = {
    name: "Rahul",
    marks: { maths: 90, science: 85, english: 88 }
};

let { name, marks: { maths, science } } = student;

console.log(`${name} scored ${maths} in maths and ${science} in science`);

✅ Output:
Rahul scored 90 in maths and 85 in science

✅ TASK 5 – Array Manipulation
🔹 Question:

Remove 30 using splice. Add 25 in its place. Reverse. Check if 50 exists.

🔹 Answer:
let numbers = [10, 20, 30, 40, 50];

// Remove 30 and add 25
numbers.splice(2, 1, 25);

// Reverse array
numbers.reverse();

// Check if 50 exists
let exists = numbers.includes(50);

console.log(numbers);
console.log("50 exists:", exists);

✅ Output:
[50, 40, 25, 20, 10]
50 exists: true

✅ TASK 6 – Flatten Data
🔹 Question:

Convert nested array into single array and find index of 6.

🔹 Answer:
let apiData = [1,2,[3,4,[5,6,[7,8]]]];

// Flatten completely
let flatArray = apiData.flat(Infinity);

console.log(flatArray);

// Find index of 6
console.log("Index of 6:", flatArray.indexOf(6));

✅ Output:
[1,2,3,4,5,6,7,8]
Index of 6: 5

✅ TASK 7 – Sorting Problem
🔹 Question:

Sort properly in ascending and descending order.

🔹 Answer:
let prices = [100, 5, 25, 300, 45];

// Ascending
prices.sort((a, b) => a - b);
console.log("Ascending:", prices);

// Descending
prices.sort((a, b) => b - a);
console.log("Descending:", prices);

✅ Output:
Ascending: [5, 25, 45, 100, 300]
Descending: [300, 100, 45, 25, 5]

✅ BONUS HARD TASK – Team Level
🔹 Question:

Increase everyone salary by 5000 using spread.
Return new array.
Sort high to low.

🔹 Answer:
let users = [
    { name: "A", salary: 20000 },
    { name: "B", salary: 40000 },
    { name: "C", salary: 30000 }
];

// Increase salary
let updatedUsers = users.map(user => ({
    ...user,
    salary: user.salary + 5000
}));

// Sort high to low
updatedUsers.sort((a, b) => b.salary - a.salary);

console.log(updatedUsers);

✅ Output:
[
 { name: "B", salary: 45000 },
 { name: "C", salary: 35000 },
 { name: "A", salary: 25000 }
]