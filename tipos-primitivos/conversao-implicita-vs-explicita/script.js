/**
 * IMPORTANTE PARA BOA PRÁTICA:
 * 
 * Conversão Implícita e Conversão Explícita
 * Conversão Implícita:
 * Quando o JavaScript converte um tipo de dado em outro Automaticamente;
 * 
 * Conversão Explícita:
 * Quando programador converte um tipo de dado em outro através de funções
 */

//Conversão Implicita:
let score1 = 100;
let score2 = '100';

console.log(score1 + score2);
//100100 - converte score 1 em string e faz a concatenação com score2
// este é um exemplo de conversão implícita

//Conversão Explícita:
let score3 = 100;
let score4 = '100';
console.log(Number(score4));
// 200 - converte score4 para number e faz a soma com score3
// este é um exemplo de conversão EXPLÍCITA
// IMPORTANT:
// Sempre que possível, use a CONVERSÃO EXPLÍCITA
// A conversão IMPLÍCITA pode levar a erros difíceis de encontrar e corrigir(bugs).