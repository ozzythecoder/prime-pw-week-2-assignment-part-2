// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a string variable called name, and set it to "Dane".
// Then, we check if the value of the name is equal to "Mary".
// It is not, so we skip the first clause and move on to the "else"
// section of the conditional, logging "How do you do?" to the console.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We initialize a variable called secret, without a value.
// Then we create a variable called code, and set its value to 123.
//
// Next, we check if the value of code is equal to 123. It is, so
// we give the secret variable a value of "super", and double the
// value of the code variable; it is now 246.
// We check if the code variable is greater than 250; it
// is not, so we skip the conditional. Finally, we log "super" to
// the console.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create a boolean variable called isStudent and set it to true.
// We create a variable called age and set it to 34.
// We create a variable called zip and set it to 55407.
//
// First, we check if *both* isStudent is true and zip is greater
// than 80000. isStudent is true, but zip is not greater than 80000,
// so we move on.
// Next, we check if *either* isStudent is false, or age is less than 30.
// Neither condition is met, so we move on.
// Next, we check if isStudent is true. It is, so we log
// "Welcome to Prime!" to the console, and exit the conditional.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*

// FIX -- these variables should have each other's values. colorOne
// should be blue, colorTwo should be red.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  // FIX -- should assign "purple" to both colorOne *and* colorTwo.
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX -- code should only run if both conditions are true.
// Should use the and (&&) operator.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// POTENTIAL FIX -- We should be checking the value of age as the mutable variable.
// Even if the logic is the same, we should write (age >= minAge) for legibility.
if(minAge <= age) {
  // FIX -- should console log "enter" if the condition is met, and "no entry" if
  // it is not met. Currently, this is backwards.
  console.log('no entry');
} else {
  console.log('enter');
}
*/