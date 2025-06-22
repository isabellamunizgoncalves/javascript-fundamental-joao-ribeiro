//Type Casting é o processo de conversão de um tipo de ado para outro tipo de dado.
//Este processo é necessário quando queremos realizar operações entre tipos de dados diferente.
//Existem dois tipos de type casting: o type casting implícito e o type casting explícito

//converter um número para strings:
let score = 100;
console.log(score.toString());

//converter uma string em numeros
let valor = '100';
console.log(Number(valor));
//ou
console.log(parseInt(valor));

//exemplo de conversão IMPLÍCITA
//o JavaScript faz a conversão IMPLICITA automaticamente quando necessário:
//Ex:

let score1 = 100;
let score3 = '100';

console.log(score1 + score2);
//100100 converte score1 para STRING e faz uma concatenação com score2
//este é um exemplo de conversão IMPLÍCITA

console.log(score1 + Number(score2));
//aqui será 200 - converte score2 para número e faz uma soma com score1
//este é um exemplo de conversão EXPLÍCITA



