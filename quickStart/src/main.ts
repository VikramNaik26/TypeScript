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

let stringArr = ['one', 'two', 'three']

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

console.log(Grade.U)
