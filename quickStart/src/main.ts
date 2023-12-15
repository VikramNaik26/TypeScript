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

/* let stringArr = ['one', 'two', 'three']

let guitar = ['Start', 'Les Paul', 5150]

let mixedData = ['EVH', true, 1984]

let test = [] // any type

let bands: string[] = []
bands.push('hey')

// tuple
// these are strick than arrays
let myTuple: [string, number, boolean] = ['Vikram', 19, true]

// object

let myObj: object = []
myObj = {}

const exampleObj = {
  prop1: 'vikram',
  prop2: 'Naik',
}
exampleObj.prop1 = 'Vikram'

type Guitarist = {
  name: string
  active?: boolean
  albums: (string | number)[]
}

// interface Guitaristtt {
//   name: string
//   active?: boolean
//   albums: (string | number)[]
// }

let evh: Guitarist = {
  name: 'vikram',
  active: true,
  albums: [1, 5, 5],
}

// enum
enum Grade {
  U,
  D,
  C,
  B,
  A,
}

console.log(Grade.U) */

// type aliases
type stringOrNumber = string | number
type stringOrNumberArray = (string | number)[]

type Guitarist = {
  name: string
  active?: boolean
  albums: stringOrNumberArray
}

// literal type
let myName: 'vikram'

let userName: 'Dave' | 'John' | 'Amy'
userName = 'Amy'
// userName = 'Racheal' // error message

// functions
const add = (a: number, b: number): number => a + b

const logMsg = (message: any): void => {
  console.log(message)
}

let subtract = function (c: number, d: number): number {
  return c - d
}

/* function multiply(f: number, a: number, b: number): number {
  return a
} */

type mathFunc = (a: number, b: number) => number
/* interface mathFunc1 {
  (a: number, b: number): number
} */

let multiply: mathFunc = function (c, d) {
  return c * d
}

const addAll = (a: number, b?: number, c: number = 5): number => {
  if (b !== undefined) {
    return a + b + c
  }
  return a + c
}

// Rest parameters
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr)
}

console.log(total(1, 2, 5))

const createErr = (errMsg: string): never => {
  throw new Error(errMsg)
}

// infinite loop also returns a never type

const isNumber = (value: any): boolean => {
  return typeof value === 'number' ? true : false
}

const isString = (value: any): boolean => {
  return typeof value === 'string' ? true : false
}

// use of never type
const numberOrString = (value: string | number): string => {
  if (isNumber(value)) return 'number'
  if (isString(value)) return 'string'
  return createErr('this should be a string')
}
