let person = {
  name: "Carol",
  age: 24,
  weight: 60.3,
};

for (let property in person) {
  console.log(property);
  console.log(person[property]);
}
