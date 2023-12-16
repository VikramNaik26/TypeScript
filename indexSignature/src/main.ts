// INDEX signature
/* interface TransactionObj {
  Pizza: number
  Books: number
  Job: number
} */

/* interface TransactionObj {
  readonly [index: string]: number
} */

interface TransactionObj {
  readonly [index: string]: number
  Pizza: number
  Books: number
  Job: number
}

const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 52,
}
// console.log(todaysTransactions.Pizza)
// console.log(todaysTransactions['Pizza'])

let prop: string = 'Pizza'
console.log(todaysTransactions[prop]) // error message

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0
  for (const transaction in transactions) {
    total += transactions[transaction]
  }
  return total
}

console.log(todaysNet(todaysTransactions))

// todaysTransactions.Pizza = 40

console.log(todaysTransactions['Vikram']) // returns undefined as there is no key with 'Vikram'

interface Student {
  //   [key: string]: string | number | number[] | undefined
  name: string
  GPA: number
  classes?: number[]
}

const student: Student = {
  name: 'Vikram',
  GPA: 3.5,
  classes: [100, 200],
}

// console.log(student.test)

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`)
}

Object.keys(student).map((key) =>
  console.log(student[key as keyof typeof student])
)

const logStudentKey = (student: Student, key: keyof Student) => {
  console.log(`Student ${key}: ${student[key]}`)
}

//////////////////////////////////////////////

/* interface Income {
  [key: string]: number
} */

type Streams = 'salary' | 'bonus' | 'sidehustle'

type Income = Record<Streams, number | string>

const monthlySalary: Income = {
  salary: 500,
  bonus: 100,
  sidehustle: 200,
}

for (const revenue in monthlySalary) {
  console.log(monthlySalary[revenue as keyof Income])
}
