/* ******************************************
* Title:   INFT1206-01 Week 10 Demo
* Author:  Clint MacDonald
* Date:    July 17, 2024
* Purpose: Introduction to JavaScript
****************************************** */

// This is a single line comment
// above is the block comment

// Our first program
console.log("Hello World!");
console.log                 ("Hello World!");
console.log('Hello World!');
console.log("This is Clint's Computer");
console.log('This is Clint\'s Computer');

// Variables
// define using either "var" or "const"
var myName = 'Clint';
console.log(myName);
console.log(myname);

// data types
var varName = 'Summer';
console.log(varName);
console.log(typeof(varName));
varName = 2024;
console.log(varName);
console.log(typeof(varName));

// pre-defined values (data types)
console.log(12/0);

var x;
console.log(x);

// Expressions
// 1) arithmetic    - evaluates to a number
// 2) string        - alphanumeric
// 3) logical       - boolean (evaluates only to true or false)

// examples:

var n1 = 172;
var n2 = 4;
var s1 = '172';
var s2 = '4';

console.log(n1+n2);
console.log(s1+n2);
console.log(n1+s2);

// conditional statements
// IF STRUCTURE
var grade, mark = 73;

if (mark >= 90)         grade = 'A+';
else if (mark >= 80)    grade = 'A';
else if (mark >= 70)   grade = 'B';
else if (mark >= 60)   grade = 'C';
else if (mark >= 50)   grade = 'D';
else grade = 'F';

console.log(grade);

// SWITCH CASE
var semester = 2;

switch (semester) {
    case 1:
        console.log('dbase, comm, math');
        break;
    case 2:
        console.log('web1, oop1, syd1');
        break;
    case 3:
        console.log('oop2, web2');
        break;
    default:
        console.log('Could not determine the correct semester!');
        break;
};



