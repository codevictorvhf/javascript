let temperature = 37.4;
let highTemperature = temperature >= 37.5;
let mediumTemperature = temperature < 37.5 && temperature >= 37;

if (highTemperature >= 37.5) {
  console.log("Febre alta");
} else if (mediumTemperature) {
  console.log("Febre");
} else {
  temperature < 37;
  console.log("Saudável");
}
