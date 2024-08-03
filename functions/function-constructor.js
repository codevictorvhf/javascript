// function Person(name) {
//   this.name = name;
//   this.walk = function () {
//     return this.name + " is walking";
//   };
// }

class Person {
  constructor(name) {
    this.name = name;
    this.walk();
  }

  walk() {
    return this.name + " is walking";
  }
}

const victor = new Person("Victor");
const carol = new Person("Carol");
console.log(victor.walk());
console.log(carol.walk());

victor.name = "michael";
console.log(victor.walk());

let string = new String("Victor");
console.log(string);

let date = new Date(2019 - 20);
console.log(date);
