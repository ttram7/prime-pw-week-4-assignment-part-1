console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log('Testing helloName function:',helloName('Bob'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return firstNumber + secondNumber;
}
console.log('The sum of two numbers is:',addNumbers(3,9));
console.log('The sum of two numbers is:',addNumbers(-4,-5));

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNum, secondNum, thirdNum ){
  return firstNum * secondNum * thirdNum;
}
console.log('The product of three numbers is:',multiplyThree(3,4,5));
console.log('The product of three numbers is:',multiplyThree(-7,4,3));
console.log('The product of three numbers is:',multiplyThree(-2,10,0));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else {
    return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) {
  return array[array.length - 1];
}
console.log('Last item in array is:',getLast([5, 6, 7]));
console.log('Last item in array is:',getLast(['apples', 'lemons', 'oranges']));
console.log('Last item in an empty array is:',getLast([]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for (let i = 0; i < array.length; i++){
    if (value === array[i]) {
      return true;
    } 
  }
  return false;
}

console.log('Value found array - should say true:',find(2,[3, 5, 7, 2]));
console.log('Value not found in array - should say false:', find('bears', ['cats', 'dogs', 'hamsters']));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string[0]) {
    return true;
  } else {
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0
  // TODO: loop to add items
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
console.log('Sum of array is:',sumAll([2,3,4,5,6]));
console.log('Sum of array is:',sumAll([0,12,-4,-5,7]));
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(array) {
  new_array = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      new_array.push(array[i]);
    }
  }
  return new_array;
}
console.log('New array with all positive numbers is:', allPositive([2,3,0,-1,-4,5]));
console.log('New array with all positive numbers is:', allPositive([-2,-3,0,-1,-4,-5]));
console.log('New array with all positive numbers is:', allPositive([]));

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

/*"Who likes it" problem from Code Wars
Replicating a "like" system from social media platforms, write a function 
that takes an array of names of people that like an item. Output would be:
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
For 4 or more names, the number in "and 2 others" simply increases.
*/

console.log('-----Code Wars Problem-----');

function whoLikesThis(names) {
  if (names.length === 0) {
    return 'No one likes this';
  } else if (names.length === 1) {
      return `${names[0]} likes this`;
  } else if (names.length === 2) {
      return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
    //return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
  } else if (names.length >= 4) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

console.log(whoLikesThis([]));
console.log(whoLikesThis(['David']));
console.log(whoLikesThis(['Bob', 'Alex']));
console.log(whoLikesThis(['Sarah', 'Joe', 'Ali']));
console.log(whoLikesThis(['Josh', 'Brittney', 'Lauren', 'Al']));
console.log(whoLikesThis(['Mike', 'Susie', 'Jackie', 'Ash', 'Pete']));
console.log(whoLikesThis(['Cal', 'Tiffany', 'Wendy', 'Jerry', 'Joy', 'Jessica']));