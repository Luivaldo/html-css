let message = "Coding is fun!";     // string
const age  = 42;                 // number
let isStudent = true;                 // boolean

let username = luis;     // write your name here
let age = 29;          // write a number here
let isStudent = true;    // true or false
 
let a = 10;
let b = 5;
 
let sum = a + b;
let difference = a - b;
let product = a  b;
let quotient = a ______ b;
 
 let score = 80;
 
if (score > 70) {
  console.log("You passed!");
}
let age = 16;
 
if (age < 18) {
  console.log("You are a minor.");
} else {
  console.log("You are an adult.");

  let time = 15;
 
if (time < 12) {
  console.log("Good morning!");
} else if (time < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good even!");
}


let movie = prompt("what is your favorite movie?");

if (movie= "scary movie") {
    document.write("Thats the best movie ever!);
        }
        else{document.write("I guess thats good too")

            
            /* =====================================
   PRACTICE 1: Greeting Message
   ===================================== */
 
// CURRENT CODE (works already):
const name = prompt("What is your name?");
const greeting = document.getElementById("message");
 
if (name && name.trim() !== "") {
  greeting.textContent = `Hello, ${name}!`;
} else {
  greeting.textContent = "Hello, friend!";
}
 
/*
TODO:
- Wrap this code in a function called greetUser
- Call the function
*/
 
 
 
/* =====================================
   PRACTICE 2: Time of Day Message
   ===================================== */
 
// CURRENT CODE:
function showTime() {
const hourInput = prompt("What hour is it? (0–23)");
const hour = Number(hourInput);
const timeMessage = document.getElementById("time");
 
if (hour < 12) {
  timeMessage.textContent = "Good morning ☀️";
} else if (hour < 18) {
  timeMessage.textContent = "Good afternoon 🌤️";
} else {
  timeMessage.textContent = "Good evening 🌙";
}
}
showTime ();
/*
TODO:
- Turn this into a function called showTimeGreeting
- Call the function
*/
 
 
 
/* =====================================
   PRACTICE 3: Change Box Color
   ===================================== */
 
// CURRENT CODE:
function whatColor(){
const color = prompt("Pick a border color");
const box = document.getElementById("box");
 
if (color && color.trim() !== "") {
  box.style.border = "5px solid " + color;
}
 }

whatColor();
 
/*
TODO:
- Turn this into a function called changeBoxColor
- Call the function
*/
 
 
 
/* =====================================
   PRACTICE 4: Confirm Choice
   ===================================== */
 
// CURRENT CODE:
const wantsDarkMode = confirm("Turn on dark mode?");
const page = document.body;
 
if (wantsDarkMode) {
  page.style.backgroundColor = "#222";
  page.style.color = "white";
}
 
/*
TODO:
- Turn this into a function called toggleDarkMode
- Call the function
*/
 
 
 
/* =====================================
   PRACTICE 5: Console Message
   ===================================== */
 
// CURRENT CODE:
console.log("JavaScript is running!");
 
/*
TODO:
- Turn this into a function called logMessage
- Call the function
*/
 