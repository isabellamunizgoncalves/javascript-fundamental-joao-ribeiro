const person = {
    name : 'John',
    age : 30,
    show() {
        return `O meu nome é ${this.name} e tenho ${this.age} anos.`;
    }
};

console.log(person.show());

/**
 * Exibe 'O meu nome é John e tenho 30 anos.'
 * 
 */