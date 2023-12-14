"use strict";
/* let userName = 'Vikram'
console.log(userName)

let a: number = 12
let b: string = '6'
let c: number = 2

// console.log(a / b) // error
 */
/* let myName: string
myName = 'Vikram'
let meaningOfLife: number = 44
let isLoading: boolean = true
let album: any

const sum = (a: number, b: number) => a + b

let postId: string | number
let isActive: boolean | number

let regex: RegExp = /\w+/g
 */
// arrays
let stringArr = ['one', 'two', 'three'];
let guitar = ['Start', 'Les Paul', 5150];
let mixedData = ['EVH', true, 1984];
let test = []; // any type
let bands = [];
bands.push('hey');
// tuple
// these are strick than arrays
let myTuple = ['Vikram', 19, true];
// object
let myObj = [];
myObj = {};
const exampleObj = {
    prop1: 'vikram',
    prop2: 'Naik',
};
exampleObj.prop1 = 'Vikram';
// interface Guitaristtt {
//   name: string
//   active?: boolean
//   albums: (string | number)[]
// }
let evh = {
    name: 'vikram',
    active: true,
    albums: [1, 5, 5],
};
// enum
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
