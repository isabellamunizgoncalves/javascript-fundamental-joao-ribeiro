/**
 * A concatenação é o processo de juntar duas ou mais strings para formar uma única string.
 * A interpolação é o processo de inserir valores dentro de uma string
 * Usando PlaceHolder  ou variáveis. Isto é feito com o uso de template literals.
 * Os templates literals são strings que permitem a interpolação de 
 * expressões e variáveis dentro delas, usando a sintaxe `${}`.
 */

//Concatenação: 
const string1 = 'Hello';
const string2 = 'World';

console.log(string1 + ' ' + string2);
//exibe 'Hello World'
//mas tambem podemos usar o concat

console.log(string1.concat(' ', string2));

//Template Literals
/**
 * São strings que permitem incorporar expressões.
 * Os templates literals são delimitados pelo acento grave (` `) em vez de aspas simples ou duplas.
 * Os templates literals podem conter placeholders, indicados pelo símbolo do dólar e chavetas ${expressão}.
 */

// Exemplo 1
const string3 = "Hello";
const string4 = "World";

console.log(`${string3} ${string4}`);