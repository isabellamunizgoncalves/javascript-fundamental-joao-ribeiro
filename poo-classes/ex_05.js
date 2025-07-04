/*
	Crie uma CLASSE ANIMAL apenas com duas PROPRIEDADES: espécie e nome.
	Esta classe deve ter um MÉTODO para MOSTRAR AMBAS as PROPRIEDADES.
	"Este animal é um(a) [espécie] e o seu nom é [nome]."
	Crie duas subclasses, Dog e Bird, que herdam da classe ANIMAL.
	Instancie um OBJETO de cada CLASSE e teste-os.
*/

class Animal{
	
	constructor(name, specie)
	{
		this.name = name;
		this.specie = specie;
	}
	
	mostrarAnimal(){
		console.log("Este Animal tem o  nome:", this.name);
		console.log("Este Animal é da Spécie:", this.specie); 
	}
}

class Dog extends Animal{
	
	teste(){
		console.log("O cão emite o som de: latido");	
	}
}

class Bird extends Animal {

	som(){
		console.log("O pássaro emite o som de: canto");
	}
}

let cao = new Dog("Cão", "Canis");
let passaro = new Bird ("Gaivota", "Larus");

console.log(cao.mostrarAnimal());
console.log(passaro.mostrarAnimal());

console.log(cao.teste());
console.log(passaro.som());