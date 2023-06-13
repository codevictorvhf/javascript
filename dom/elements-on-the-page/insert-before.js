const div = document.createElement("div");
div.innerText =
  ' "Estou conseguindo alcançar o meu objetivo. Os meus sonhos serão realizados"';

const body = document.querySelector("body");
const script = body.querySelector("script");
body.insertBefore(div, script);
