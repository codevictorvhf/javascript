/* Create a function that receives a string 
in celsius or fahrenheit and transforms it from one unit to another 

C = (F - 32) * 5/9

F = C * 9/5 + 32
*/

// transformDegree('50F')
function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes("C");
  const fahrenheitExists = degree.toUpperCase().includes("F");

  // error flow
  if (!celsiusExists && !fahrenheitExists) {
    throw new Error("Grau não identificado");
  }

  // ideal flow - fahrenheit to celsius
  let updateDegree = Number(degree.toUpperCase().replace("F", ""));
  let formula = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
  let degreeSign = "C";

  // alternate flow - celsius to fahrenheit
  if (celsiusExists) {
    updateDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = (celsius) => (celsius * 9) / 5 + 32;
    degreeSign = "F";
  }

  return formula(updateDegree) + degreeSign;
}

try {
  console.log(transformDegree("50F"));
  console.log(transformDegree("10C"));
  console.log(transformDegree("50G"));
} catch (error) {
  console.log(error);
}
