/*
	Crie uma classe Human, com apenas uma PROPRIEDADE: name.
	Esta PROPRIEDADE deve ser PRIVADA e ACESSÍVEL 
	apenas através de um GETTER e SETTER.
	Instancie um OBJETO desta CLASSE e teste o GETTER e o SETTER; 
*/

class Human{
	
	#name
	
	set setName(value){
		this.#name = value;
	}
	
	get getName(){
		return this.#name;
	}
}

let person = new Human();
person.setName = "Isabella";
console.log(person.getName);
