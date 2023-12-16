"use strict";
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
    constructor(name, music, age, lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return this.age;
    }
}
const Dave = new Coder('Dave', 'Rock', 15);
console.log(Dave.getAge());
class WebDev extends Coder {
    constructor(computer, name, age, music) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `my language: ${this.lang}`;
    }
}
const webDev = new WebDev('Windows', 'Vikram', 19, 'Arijit Singh');
console.log(webDev.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play('strums'));
////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(Steve.id);
console.log(Peeps.count);
////////////////////////
// getters and setters
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error('The params is not an array of strings');
        }
    }
}
const myBands = new Bands();
myBands.data = ['Neil Young', 'Led zip'];
console.log(myBands.data);
myBands.data = [...myBands.data, 'ZZ top'];
console.log(myBands.data);
