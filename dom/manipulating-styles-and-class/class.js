const element = document.querySelector("body");

element.classList.add("active", "background");
console.log(element.classList);
element.classList.remove("active");
element.classList.toggle("active");
