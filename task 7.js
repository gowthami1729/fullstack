✅ TASK 1 – Custom Digital Clock
function digitalClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zero
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    console.log(`Current Time: ${hours} : ${minutes} : ${seconds}`);
}

setInterval(digitalClock, 1000);


✔ Uses: new Date(), getHours(), getMinutes(), getSeconds(), setInterval()

✅ TASK 2 – Find Current Day Name
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const today = new Date();
const dayName = days[today.getDay()];

console.log("Today is " + dayName);


✔ Uses: getDay()

✅ TASK 3 – Age Calculator (Basic)
let birthYear = 2003;

let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

console.log("Your age is " + age);


✔ Uses: getFullYear()

✅ TASK 4 – Create Specific Date

Create:
15 August 2020
10:30:45 AM

let date = new Date();

date.setFullYear(2020);
date.setMonth(7);       // August (0-based index)
date.setDate(15);
date.setHours(10);
date.setMinutes(30);
date.setSeconds(45);

console.log(date.toLocaleString());


✔ Note: Month starts from 0 (January = 0)

✅ SECTION 2 – setTimeout & setInterval
✅ TASK 5 – Delayed Message
setTimeout(function() {
    console.log("Welcome Naveen");
}, 3000);


✔ Executes after 3 seconds

✅ TASK 6 – Stop Interval After 5 Seconds
let count = 1;

let interval = setInterval(function() {
    console.log(count);
    count++;

    if (count > 5) {
        clearInterval(interval);
        console.log("Stopped");
    }
}, 1000);


✔ Uses: setInterval() and clearInterval()

✅ SECTION 3 – Promise Practice
✅ TASK 7 – Simple Promise
let number = 15;

let checkNumber = new Promise(function(resolve, reject) {
    if (number > 10) {
        resolve("Valid number");
    } else {
        reject("Invalid number");
    }
});

checkNumber
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    })
    .finally(function() {
        console.log("Promise completed");
    });


✔ Uses: .then(), .catch(), .finally()

✅ SECTION 4 – Fetch API Task
✅ TASK 8 – Fetch Product Prices
fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {
        data.forEach(product => {
            console.log("Product: " + product.title);
            console.log("Price: " + product.price);
            console.log("-----------------");
        });
    })
    .catch(error => console.log("Error:", error));


✔ Uses Fetch API

✅ SECTION 5 – Execution Order Task
Code:
function one(){
  console.log("one");
}

function two(){
  console.log("two");
}

function three(){
  console.log("three");
}

one()
setTimeout(two,0)
three()

✅ Output:
one
three
two

✅ Explanation:

one() runs first → prints one

setTimeout(two,0) goes to Web API / Callback Queue

three() runs next → prints three

Event Loop executes two() → prints two

Even though timeout is 0, it is asynchronous and waits until the call stack is empty.