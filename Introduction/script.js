/**
 * Data Types in JavaScript
 * -------------------------
 * JavaScript is a dynamically typed language, meaning variables can hold different types of data at different times.
 *
 * 1. **Primitive Data Types**:
 *    - `undefined`: A variable that has been declared but not assigned a value.
 *    - `null`: Represents the intentional absence of any object value.
 *    - `boolean`: Represents a logical entity and can have two values: `true` or `false`.
 *    - `number`: Represents both integer and floating-point numbers.
 *    - `bigint`: Represents integers with arbitrary precision.
 *    - `string`: Represents a sequence of characters.
 *    - `symbol`: Represents a unique and immutable value, often used as object keys.
 *
 * 2. **Non-Primitive (Reference) Data Types**:
 *    - `object`: Represents collections of key-value pairs or more complex entities.
 *      - Examples: Arrays, Functions, Dates, etc.
 *
 * Note:
 * - Variables in JavaScript are not directly associated with any particular data type.
 * - The `typeof` operator can be used to determine the type of a variable.
 */

//This is an alert
//Single Line Comment
/*
Multi Line Comment
JS Introduction
*/
//dynamically typed language
//variables (var, let, const ) - 8 bytes

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let score = 0; //initialization

//assignment
// score = 10.5 //1010
// score = 'no score'

//console.log("score is " + score);

const pi = 3.14; //constant - cannot be changed

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
Operators
---------

Arithmetic Operators:  +  -  *  **  /  %  ++  --
Assignment Operators: =  +=  -=  *=  /=  %=  **=
Comparison Operators: ==  ===  !=  !==  >  <  >=  <=  ?:
Logical Operators: && || !
Bitwise Operators: &  |  ~  ^  <<  >> >>>

*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//user input

// let name = prompt("whats your name?") //prompt - takes input from user
// console.log('hi ',name)

/* 
The purpose of Number() in this code is to explicitly convert the value of tickets into a number. 
This is important because tickets might be a string (e.g., if it was retrieved from user input like a 
form or prompt). Without this conversion, the multiplication (* 20) might not work as intended. 
*/

// let tickets = prompt('how many tickets do you want?')
// console.log("you should pay ", Number(tickets)*20)

// let a = prompt("Enter a number")
// console.log(Number(a)+10)

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//String - Group of Characters

let str1 = "Strive not to be a success, ";
let str2 = "but rather to be a value";

/*Partitioning String

slice(start, end)
substring(start, end)
substr(start, length)
*/

// Template Literals
// Introduced in 2015 with ECMAScript6 or ES6

let firstName = "Mohamed";
let lastName = "Inthikhaff";
let city = "Sainthamaruthu";

console.log(firstName + " " + lastName + " lives in " + city);

//string interpolation
console.log(`${firstName} ${lastName} lives in ${city}`); //${variable} - string interpolation

//multiline string

let msg = `happy
birthday`;

console.log(msg);

//single and double quotes in string
msg = "cat's name is toto";

msg = `cat's name is "toto"`;

console.log(msg);

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//arrays
let num = 10;
let name = "inthikhaff";

let cities = ["Sainthamaruthu", "Kalmunai", "Sri Lanka"];

let marks = [78, 56, 67, 54, 98];

//length - total elements in the array
console.log(marks.length);

//access 2nd element from start - index starts with 0.
console.log(cities[1]);

//access 3rd element in array
console.log(cities[3]);

//last element
console.log(marks[marks.length - 1]);

//mix of int and string
let arr = [5, 6, 7, "a", "abc", [3, 4]];
console.log(arr);
console.log(arr[5][1]);

//2d array
let matrix = [
  [3, 4, 5],
  [4, 5, 7],
  [6, 7, 8],
];
console.log(matrix[2][1]);

//array methods
let array = ["a", "b", "c", "d", "e"];

//push - add element to the end and returns new length
array.push("f");
console.log(array);

//pop - removes element from the end and
//returns removed value
console.log(array.pop());

//shift - removes element from start of the array
//returns removed value
console.log(array.shift());
console.log(array);

//unshift - adds element to the start of the array
//returns new length
console.log(array.unshift("a"));
console.log(array);

//delete
// delete array[2]
// console.log(array[2])

//splice
//1st parameter - starting index
//2nd parameter - no. of elements to be deleted from starting index
//3rd(or more) parameter - values to be inserted from starting index
array.splice(2, 2); //deletes 2 elements starting at index 2
console.log(array);

array.splice(1, 1, "m"); // replace - deletes element at index 1 and inserts 'm'
console.log(array);

array.splice(1, 2, "x", "y"); //deletes elements at position 1 and 2 and inserts 'x','y'
console.log(array);

array.splice(1, 0, "b");
console.log(array);

//slice(starting index, ending index)
//ending index not included
console.log(array.slice(1, 2));

//reverse
array.reverse();
console.log(array);

//join - converts array to  string

let str = array.join();
console.log(str);

//split - converts string to array
let str3 = "g,t,r,e";
let arr3 = str3.split(",");
console.log(arr3);

//concat and spread operator
let firstArr = [1, 2, 3];
let secondArr = [4, 5, 6];

let joinedArr = [firstArr, secondArr];
console.log(joinedArr);

joinedArr = firstArr.concat(secondArr);
console.log(joinedArr);

let joined = [...firstArr, ...secondArr];
console.log(joined);
