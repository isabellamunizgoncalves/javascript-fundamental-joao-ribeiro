const person = {
    name : 'John',
    age: 30
};

//Object.keys
console.log(Object.keys(person));// exibe: [name, age]

//Object.values
console.log(Object.values(person));// exibe: [John, 30]


console.log(Object.entries(person)); // exibe: [name, John], [age, 30];

const person2 = Object.assign({}, person); //copia person para person2

//Object.freeze
Object.freeze(person)//impede alterações em person
//person.name = 'Mary' // erro

//Object.seal
Object.seal(person); //impede que novas PROPRIEDADES sejam adicionadas a person
// person.height = 1.8 //erro

