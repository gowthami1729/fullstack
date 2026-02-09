Q1: Check number between 10 and 50
let num = 25;

if (num >= 10 && num <= 50) {
  console.log("Valid Number");
} else {
  console.log("Invalid Number");
}

Q2: Login eligibility using logical AND
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login Successful");
} else {
  console.log("Login Failed");
}

Q3: Even or Odd using ternary
let number = 7;
let result = number % 2 === 0 ? "Even" : "Odd";
console.log(result);

Q4: Output & Explanation
console.log((10 === "10") || (5 > 2) && !(3 < 1));


Step-by-step:

10 === "10" → false (different types)

5 > 2 → true

3 < 1 → false

!(false) → true

true && true → true

false || true → true

✅ Output: true

PART 2 – Type Conversion
Q5: Output & Explanation
console.log("5" + 2); // "52"
console.log("5" - 2); // 3
console.log("5" * 2); // 10
console.log("5" / 2); // 2.5


Explanation:

+ → String concatenation

- * / → JS converts string to number automatically

Q6: Explicit Conversion
let value = "100";

let numValue = Number(value);
let boolValue = Boolean(value);

console.log(numValue);   // 100
console.log(boolValue);  // true

Q7: Boolean Outputs
console.log(Boolean(""));   // false
console.log(Boolean(" "));  // true
console.log(Boolean(0));    // false
console.log(Boolean([]));   // true


Explanation:

Empty string → false

Space is not empty → true

0 → false

Empty array is an object → true

PART 3 – Conditional Statements
Q8: Grade Program
let marks = 78;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

Q9: Traffic Signal (switch case)
let signal = "red";

switch (signal) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Ready");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid Signal");
}

Q10: Nested If Eligibility
let age = 20;
let height = 165;
let weight = 55;

if (age >= 18) {
  if (height >= 160) {
    if (weight >= 50) {
      console.log("Selected");
    } else {
      console.log("Weight condition failed");
    }
  } else {
    console.log("Height condition failed");
  }
} else {
  console.log("Age condition failed");
}

PART 4 – Loops
Q11: 1 to 20
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

Q12: Odd numbers (1–20)
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

Q13: While loop (10 to 1)
let i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}

Q14: Do-While (1 to 5)
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

Q15: for-of loop
let word = "STACKLY";

for (let char of word) {
  console.log(char);
}

Q16: for-in loop
let student = {
  name: "Arun",
  course: "MERN",
  duration: "6 months"
};

for (let key in student) {
  console.log(key + " : " + student[key]);
}
REAL-TIME QUESTIONS
RT-1: Login System (Logical + Ternary)
let user = "admin";
let pass = "1234";

let message = (user === "admin" && pass === "1234")
  ? "Login Success"
  : "Invalid Credentials";

console.log(message);

RT-2: Salary Bonus
let salary = 60000;
let experience = 4;

if (salary > 50000 && experience > 3) {
  console.log("Eligible for bonus");
} else {
  console.log("Not eligible");
}

RT-3: Shopping Discount
let amount = 3500;

if (amount >= 5000) {
  console.log("20% Discount");
} else if (amount >= 2000) {
  console.log("10% Discount");
} else {
  console.log("No Discount");
}

RT-4: Even Number Counter (1–50)
let count = 0;

for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    count++;
  }
}

console.log("Even numbers count:", count);

RT-5: Dynamic Greeting
let hour = 15;

if (hour >= 1 && hour <= 6) {
  console.log("Good Morning");
} else if (hour >= 7 && hour <= 12) {
  console.log("Morning");
} else if (hour >= 13 && hour <= 16) {
  console.log("Good Afternoon");
} else if (hour >= 17 && hour <= 19) {
  console.log("Good Evening");
} else {
  console.log("Good Night");
}
