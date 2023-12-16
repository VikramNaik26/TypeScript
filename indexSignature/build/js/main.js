"use strict";
// INDEX signature
/* interface TransactionObj {
  Pizza: number
  Books: number
  Job: number
} */
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 52,
};
// console.log(todaysTransactions.Pizza)
// console.log(todaysTransactions['Pizza'])
let prop = 'Pizza';
console.log(todaysTransactions[prop]); // error message
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
// todaysTransactions.Pizza = 40
console.log(todaysTransactions['Vikram']); // returns undefined as there is no key with 'Vikram'
const student = {
    name: 'Vikram',
    GPA: 3.5,
    classes: [100, 200],
};
// console.log(student.test)
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map((key) => console.log(student[key]));
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
const monthlySalary = {
    salary: 500,
    bonus: 100,
    sidehustle: 200,
};
for (const revenue in monthlySalary) {
    console.log(monthlySalary[revenue]);
}
