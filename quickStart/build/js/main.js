"use strict";
/* let userName = 'Vikram'
console.log(userName)

let a: number = 12
let b: string = '6'
let c: number = 2

// console.log(a / b) // error
 */
// literal type
let myName;
let userName;
userName = 'Amy';
// userName = 'Racheal' // error message
// functions
const add = (a, b) => a + b;
const logMsg = (message) => {
    console.log(message);
};
let subtract = function (c, d) {
    return c - d;
};
/* interface mathFunc1 {
  (a: number, b: number): number
} */
let multiply = function (c, d) {
    return c * d;
};
const addAll = (a, b, c = 5) => {
    if (b !== undefined) {
        return a + b + c;
    }
    return a + c;
};
// Rest parameters
const total = (a, ...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
console.log(total(1, 2, 5));
