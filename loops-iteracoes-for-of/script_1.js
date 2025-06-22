/**
 * O ciclo for... of é utilizado para iterar sobre os OBJETOS ITERÁVEIS
 * como arrays, strings, maps, sets, e outros OBJETOS que implementam o PROTOCOLO DE ITERAÇÃO
 * Ele permite ACESSAR os VALORES DIRETAMENTE, sem precisar usar ÍNDICES ou CHAVES
 */

const myName = "John";

//apresenta os caracters da string nome
for(let caracters of myName){
    console.log(caracters);
}

const myArray = [1,2,3,4,5];

//apresenta os valores do array:
for(let value of myArray){
    console.log(value);
}

/*
 * Se achas que as INSTRUÇÕES se estão a complicar, não te preocupes!
 * Todos os conceitos que aprendeste até agora, vão ser aplicados em exercícios PRÁTICOS
 * Com uma PRÁTICA consistente, vais dominar todos estes elementos e muito mais
 */