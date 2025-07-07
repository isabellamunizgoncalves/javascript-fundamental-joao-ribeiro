const cities = ['New York', 'Rio de Janeiro', 'Tokyo', 'Los Angeles'];

//length
console.log(cities.length);

//indexOf
console.log(cities.indexOf('Tokyo'));

//adicionar elemento ao final do array
cities.push('London');
// ou também:
cities[cities.length] = 'London';

//remove elemento no final do array
cities.pop();

//adicionar elemento ao início do array
cities.unshift('London');

//remove elemento do início do array
cities.shift();

//remove elemento do meio do array
cities.splice(1, 1);//remove 1 elemento a partir do índice 1

//ordenar por ordem alfabetica
cities.sort();

//inverter
cities.reverse();

//juntar
console.log(cities.join(' - ')); //exibe 'Tokyo - New York - Los Angeles - London' coloca todos em uma string só