//EXEMPLO_01

/*
	Crie uma CLASSE SIMPLES com DUAS PROPRIEDADES, NOME e APELIDO, e um MÉTODO
	que devolva o NOME COMPLETO. Instancie esta classe e teste o seu Método. 
*/


class Person{
	
	constructor(nome, apelido){
		this.nome = nome;
		this.apelido = apelido;
	}
	
	mostrarNome(){
		console.log("O nome da pessoa é: ", this.nome, this.apelido);
	}
}

let pessoa = new Person("Isabella", "Gonçalves");
pessoa.mostrarNome();