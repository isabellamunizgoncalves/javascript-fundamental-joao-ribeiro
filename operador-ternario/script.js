/**
 * O operador ternário é uma forma de simplificar o uso do if e else em  JavaScript
 * 1. A condição a ser avaliada (ex: x > y)
 * 2. O valor a ser retornado se a condição for verdadeira (ex: 'x é maior que y')
 * 3. O valor a ser retornado se a condição for falsa (ex: 'x não é maior que y')
 * 
 * É também conhecido como OPERADOR CONDICIONAL ou OPERADOR DE CONDIÇÃO
 */

let myName = 'Isabella'
console.log(myName === 'Isabella' ? 'Hello Isabella' : 'Hello Visitor');

myName = 'Jane';
console.log(myName === 'Isabella' ? 'Hello Isabella' : 'Hello Visitor');

// por vezes o operador ternario é usado para atribuir um valor a uma variavel

let age = 10;
let canDrive = age >= 18 ? true : false;
console.log(canDrive);

//o operador ternario é muito usado em FRAMEWORKS do ECOSSISTEMA de JAVASCRIPT
//Como REACT, ANGULAR e VUE.JS, 
//para renderizar os componentes ou elementos de forma
//condicional