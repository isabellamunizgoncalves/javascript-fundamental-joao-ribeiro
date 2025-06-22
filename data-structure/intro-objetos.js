//vamos falar sobre uma estrutura de dados muito importante
//EM js: os objetos

let personName = 'Isabella';
let personAge = '32';
let personWeight = 70;

//vamos criar um objetos para representar essa pessoa

let person = {
    name : 'Isabella',
    age: 32,
    weight: 70
};

/**
 * O objeto é uma coleção de propriedades.
 * Cada propriedade tem uma chave e um valor.
 * 
 * a CHAVE é o NOME da PROPRIEDADE e o VALOR é o VALOR da PROPRIEDADE.
 * A CHAVE e o VALOR são separados por dois pontos (:)
 * AS PROPRIEDADES são SEPARADAS por VÍRGULAS (,)
 * O OBJETO é delimitado por chaves ({})
 */

//Para acessar as PROPRIEDADES de um OBJETO, usamos a NOTAÇÃO DE PONTO (.)
//colocamos o nome do objeto o ponto e o nome da propriedade
console.log(person.name) //Isabella
console.log(person.age)//32
console.log(person.weight)//70

//também podemos acessar as propriedades de um objeto usando a notação de colchetes([])
console.log(person['name']);//Isabella
console.log(person['age']);//32
console.log(person['weight']);//88.6

//também podemos usar variáveis para acessar as PROPRIEDADES de um OBJETO
let propertyName = 'name';
console.log(person[propertyName]); // Isabella