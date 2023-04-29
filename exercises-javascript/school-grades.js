let score = 77;

let a = score >= 90;
let b = score > 80 && score <= 89;
let c = score > 70 && score <= 79;
let d = score > 60 && score <= 69;
let e = score <= 60;

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
