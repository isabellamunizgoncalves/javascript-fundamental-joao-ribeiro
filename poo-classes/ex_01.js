//EXERCÍCIO_01

/*
* Você tem 3 animais de ESTIMAÇÃO: 
* - um gato;
* - um cachorro;
* - um papagaio;
* Crie uma classe chamada Animal com as seguintes PROPRIEDADES e MÉTODOS:
* Propriedades: (nome, peso, espécie);
* Métodos: comer(), dormir(), brincar()
* Método: comer() deve receber um PARÂMETRO que representa o tipo de alimento 
* que o animal come.
* O método brincar() deve receber um parâmetro que representa o tipo de BRINQUEDO
* com o qual o ANIMAL BRINCA.
* Crie três INSTÂNCIAS da classe Animal, uma para cada animal de ESTIMAÇÃO:
*/

class Animal {
	
	//Constructor
	constructor(n, p, s){
		this.nome = n;
		this.peso = p;
		this.specie = s;
	}
	
	//Métodos:
	comer(comida)
    {
		this.alimento = comida;
		console.log(
            "Este animal", 
            this.nome, 
            ", gosta de comer: ",	
            this.alimento
        );
	}

	dormir()
	{
		console.log(
			"O animal que gosta de domir é o", 
			this.nome
		);
	}
	
	brincar(brincar)
	{
		this.brinquedo = brincar;
		console.log(
			"O animal", 
			this.nome, 
			"gosta de brincar de: ",
			this.brinquedo
			);
	}
}

// Criando as três instâncias desta classe:
let cao = new Animal("Lupita", 27,"Canis");
let gato = new Animal ("Xaninha", 110, "Felis Catus");
let leopardo = new Animal ("Leonidas", 136, "Panthera onca");

cao.comer("Lasanha");
cao.dormir();
cao.brincar("Bolinha");

gato.comer("Ração");
gato.dormir();
gato.brincar("Novelo de Linha");

leopardo.comer("Carne");
leopardo.dormir();
leopardo.brincar("Filhotes");