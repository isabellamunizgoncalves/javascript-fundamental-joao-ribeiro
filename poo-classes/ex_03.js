/*
	Crie uma CLASSE HUMAN com as PROPRIEDADES nome e idade.
	A classe deve conter um método que devolva a frase:
	"Ola, meu nome é [nome] e tenho [idade] anos.
	Crie dois objetos desta classe e teste os métodos criados;
*/

class Human{

	constructor(nome, idade){
		this.nome = nome;
		this.idade = idade;
	}
	
	mostrarHuman(){
		console.log("Olá, meu nome é: ", this.nome, "e tenho ", this.idade, "anos");
	}
}

let person1 = new Human("Isabella", 32);
person1.mostrarHuman();