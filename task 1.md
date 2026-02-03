1. What is the difference between var, let, and const?

var: Function-scoped, allows redeclaration and reassignment

let: Block-scoped, does not allow redeclaration but allows reassignment

const: Block-scoped, does not allow redeclaration or reassignment

2. Which keyword allows redeclaration and why?

var, because it is not block-scoped

3. Which keyword allows reinitialization?

var and let

4. Which keyword does not allow redeclaration and reinitialization?

const

5. Why should const be used for fixed values?

Because its value cannot be changed, ensuring data safety

6. What error occurs when redeclaring a let variable?

SyntaxError: Identifier has already been declared

7. What error occurs when reassigning a const variable?

TypeError: Assignment to constant variable

8. Which keyword is preferred in modern JavaScript and why?

let and const, because they are block-scoped and prevent bugs

9. Can const be declared without initialization? Explain.

❌ No, const must be initialized at the time of declaration

10. When should var be avoided?

In modern JavaScript due to scope and hoisting issues

SECTION B: Code-Based Questions

11. Predict the output

var a = 10;
a = 20;
var a = 30;
console.log(a);


✅ Output: 30

12. Predict the output

let b = 5;
b = 15;
console.log(b);


✅ Output: 15

13. Identify the error

let x = 10;
let x = 20;


❌ Error: SyntaxError (redeclaration not allowed)

14. Identify the error

const y = 50;
y = 100;


❌ Error: TypeError (reassignment not allowed)

15. Write a program using var to show redeclaration

var num = 10;
var num = 20;
console.log(num);


16. Write a program using let to show reinitialization

let value = 5;
value = 15;
console.log(value);


17. Write a program using const and explain why value cannot change

const pi = 3.14;
console.log(pi);


Reason: const variables cannot be reassigned

18. Convert var to let

let count = 10;
count = 20;


19. Convert var to const

const maxLimit = 100;


20. Write your own example for var, let, and const

var name = "Gowthami";
let age = 21;
const country = "India";