/**
 * A iteração for in é utilizada para iterar sobre as PROPRIEDADES
 * de um OBJETO. O Loop for in percorre todas as PROPRIEDADES ENUMERÁVEIS
 */

const human = {
    name: "John",
    age: 23,
    wight: 60.5
};

/**
 * displays the proprietiers of the human object
 * apresenta as propriedades do objeto human
 */
console.log("Apresenta as propriedades: ");
for (let property in human){
    console.log(property);
}

//apresenta os valores das PROPRIEDADES do objeto human
console.log("Apresenta os valores das propriedades: ");
for (let property in human){
    console.log(human[property]);
}

//apresenta as PROPRIEDADES e os VALORES do OBJETO human
console.log("Apresenta a propriedades e os Valores: ");
for(let property in human){
    console.log(property, " -> ", human[property]);
}