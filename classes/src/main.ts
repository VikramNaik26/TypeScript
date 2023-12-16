/* class Coder {
  name: string
  music: string
  age: number
  lang: string

  constructor(name: string, music: string, age: number, lang: string) {
    this.name = name
    this.music = music
    this.age = age
    this.lang = lang
  }
}
 */

class Coder {
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = 'Typescript'
  ) {
    this.name = name
    this.music = music
    this.age = age
    this.lang = lang
  }

  public getAge(): number {
    return this.age
  }
}

const Dave = new Coder('Dave', 'Rock', 15)

console.log(Dave.getAge())

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    age: number,
    music: string
  ) {
    super(name, music, age)
    this.computer = computer
  }
  public getLang() {
    return `my language: ${this.lang}`
  }
}

const webDev = new WebDev('Windows', 'Vikram', 19, 'Arijit Singh')
console.log(webDev.getLang())

/////////////////////////////////////////////

interface Musician {
  name: string
  instrument: string
  play(action: string): string
}

class Guitarist implements Musician {
  constructor(public name: string, public instrument: string) {
    this.name = name
    this.instrument = instrument
  }
  play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`
  }
}

const Page = new Guitarist('Jimmy', 'guitar')
console.log(Page.play('strums'))

////////////////////////////////////////

class Peeps {
  static count: number = 0

  static getCount(): number {
    return Peeps.count
  }

  public id: number

  constructor(public name: string) {
    this.name = name
    this.id = ++Peeps.count
  }
}

const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')

console.log(Steve.id)
console.log(Peeps.count)

////////////////////////
// getters and setters

class Bands {
  private dataState: string[]

  constructor() {
    this.dataState = []
  }

  public get data(): string[] {
    return this.dataState
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === 'string')) {
      this.dataState = value
      return
    } else {
      throw new Error('The params is not an array of strings')
    }
  }
}

const myBands = new Bands()
myBands.data = ['Neil Young', 'Led zip']
console.log(myBands.data)
myBands.data = [...myBands.data,  'ZZ top']
console.log(myBands.data)

