// utitlity types

// Partial
interface Assignment {
  studentId: string
  title: string
  grade: number
  verified?: boolean
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate }
}

const assign1: Assignment = {
  studentId: 'compsci123',
  title: 'Final Project',
  grade: 0,
}

console.log(updateAssignment(assign1, { grade: 95 }))
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 })

// Required and Readonly assignment

const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // send to database
  return assign
}

const assignVerified: Readonly<Assignment> = { ...assignGraded, verified: true }

recordAssignment({ ...assignGraded, verified: true })

// Record
const hexColorMap: Record<string, string> = {
  red: 'FF0000',
  green: '00FF00',
  blue: '0000FF',
}

type Students = 'Sara' | 'Kelly'
type LettersGrade = 'A' | 'B' | 'C' | 'D' | 'U'

const finalGrade: Record<Students, LettersGrade> = {
  Sara: 'B',
  Kelly: 'U',
}

interface Grades {
  assign1: number
  assign2: number
}

const gradeData: Record<Students, Grades> = {
  Kelly: { assign1: 1, assign2: 2 },
  Sara: { assign1: 1, assign2: 5 },
}

// Pick and Omit
type AssignResult = Pick<Assignment, 'studentId' | 'grade'>
const score: AssignResult = {
  studentId: 'JK063',
  grade: 10,
}

type AssignPreview = Omit<Assignment, 'grade' | 'studentId'>
const preview: AssignPreview = {
  title: 'final grade',
}

// Exclude and Extract
type AdjustResult = Exclude<LettersGrade, 'U'>

type HighGrades = Extract<LettersGrade, 'A' | 'B'>

// NonNullable
type AllPossibleGrade = 'Dave' | 'John' | null | undefined

type NamesOnly = NonNullable<AllPossibleGrade>

// return type
// type newAssign = { title: string; points: number }

const createNewAssign = (title: string, points: number) => {
  return { title, points }
}

type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign('Utility Types', 100)

// Parameters
type AssignParameters = Parameters<typeof createNewAssign>

const assignArgs: AssignParameters = ['Generics', 100]

const assign2: NewAssign = createNewAssign(...assignArgs)
console.log(assign2)

// Awaited - helps us with the return type of Promise
interface User {
    id: number,
    name: string,
    username: string,
    email: string,
}

const fetchUsers = async (): Promise<User[]> => {

    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) console.log(err.message)
    })
    return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))
