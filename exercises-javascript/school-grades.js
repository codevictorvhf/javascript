let nota = 77;

let a = nota >= 90;
let b = nota > 80 && nota <= 89;
let c = nota > 70 && nota <= 79;
let d = nota > 60 && nota <= 69;
let e = nota <= 60;

if (a >= 90) {
  console.log("a");
} else if (b) {
  console.log("b");
} else if (c) {
  console.log("c");
} else if (d) {
  console.log("d");
} else {
  nota = e;
  console.log("e");
}
