function Person(name) {
  this.name = name;
  this.walk = function () {
    return this.name + " is walking";
  };
}

let string = new String("Victor");
console.log(string);

let date = new Date(2019 - 03 - 20);
console.log(date);

const victor = new Person("Victor");
const carol = new Person("Carol");
console.log(victor.walk());
console.log(carol.walk());
