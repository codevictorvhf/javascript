let techs = ["html", "css", "js"];

//Adicionar item no final
techs.push("nodejs");

//Adicionar um item no começo
techs.unshift("SQL");

//Remover item no final do array
//techs.pop();

//Remover item no começo do array
//techs.shift();

//Pegar somente alguns elementos do array
//console.log(techs.slice(1, 3));

//Remover 1 ou mais itens em qualquer posição do array
//techs.splice(1, 1);

//Encontrar a posição de um elemento no array
let index = techs.indexOf("css");
techs.splice(index, 1);
console.log(index);

console.log(techs);
