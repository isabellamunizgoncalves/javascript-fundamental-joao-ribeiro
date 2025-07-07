const myString = "This is JavaScript!";
console.log(myString);

//length
console.log(myString.length);

//indexOf
console.log(myString.indexOf('is'));

//lastIndexOf
console.log(myString.lastIndexOf('is'));

//search
console.log(myString.search('is'));

//slice
console.log(myString.slice(2 ,4));

//substring
console.log(myString.substring(8, 12)); //exibe 'Java'

//substr
console.log(myString.substr(8, 4));

//replace
console.log(myString.replace('JavaScript', 'HTML5'))// exibe 'Troca o JS por  HTML'

//toUpperCase
console.log(myString.toLocaleUpperCase());//exibe as palavras em maiúculo

//toLowerCase
console.log(myString.toLowerCase());// exibe as palavras em maiúculo

//concat 
console.log(myString.concat(' And Python!')); //concatena strings

//split
console.log(myString.split(' ')); //divide as strings, fatiando-as 
// e existem muitas outras funções integradas para string em JavaScript

//trim 
const myString2 = '  This is JavaScript!  ';
console.log(myString2.trim()); //exibe: 'This is JavaScript' 

//split
console.log(myString.split(' '));