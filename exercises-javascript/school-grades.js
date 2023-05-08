// make an algorithm that turns numeric notes into character notes

function getScore(score) {
  let a = score >= 90;
  let b = score >= 80 && score <= 89;
  let c = score >= 70 && score <= 79;
  let d = score >= 60 && score <= 69;
  let e = score < 60 && score >= 0;

  let scoreFinal;

  if (a) {
    scoreFinal = "A";
  } else if (b) {
    scoreFinal = "B";
  } else if (c) {
    scoreFinal = "C";
  } else if (d) {
    scoreFinal = "D";
  } else if (e) {
    scoreFinal = "E";
  } else {
    scoreFinal = "Invalid Note";
  }

  return scoreFinal;
}

console.log(getScore(2));
console.log(getScore(77));
console.log(getScore(91));
console.log(getScore(64));
console.log(getScore(88));
console.log(getScore(-2));
