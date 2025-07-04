/**
 * Nullish coalescing operator (??) é um OPERADOR LÓGICO que retorna o operando
 * Do lado direito quando o OPERANDO do LADO ESQUERDO é NULL ou UNDEFINED
 * Este operador é útil para definir valores padrão quando uma VARIÁVEL
 * Pode ser NULL ou UNDEFINED.
 * 
 * É um OPERADOR muito usado no ecossistema do JavaScript,
 * especialmente em Bibliotecas e FRAMEWORKS MODERNOS como 
 * React, Vue e Angular
 */

//Exemplo 1
let number = null;
console.log(number ?? 100); //100

//Exemplo 2
let number2 = undefined;
console.log(number2 ?? 100);

//Exemplo 3
let number3 = 123
console.log(number3 ?? 100); //123

let number4 = 0;
console.log(number4 ?? 100);//0

let number5 = "";
console.log(number5 ?? 100)// ""

let number6 = false;
console.log(number6 ?? 100);

let number7 = null;
let number8 = number7 ?? 100;
console.log(number8);