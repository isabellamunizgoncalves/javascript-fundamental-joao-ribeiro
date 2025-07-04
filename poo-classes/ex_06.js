/*
* Crie uma classe que tenha 4 métodos estáticos:
* sum (a,b)
* subtract (a,b)
* multiply(a, b)
* divisao(a, b)
* Cada método deve devolver a respetiva operação entre a e b;
* Teste todos os métodos com os valores 100 e 20.
*/

class Calculadora{
	
	static sum(a, b){
		return a + b;
	}
	
	static substract(a,b){
		return a - b;
	}
	
	static multiply(a, b){
		return a * b;
	}
	
	static divisao(a, b){
		return a / b;
	}
}

let n1 = 15;
let n2 = 20;

Calculadora.sum(n1, n2);