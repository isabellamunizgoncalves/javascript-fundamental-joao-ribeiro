/**
 * a outra palavra-chave que pode ser utilizada para interromper
 * um loop é uma palavra-chave "continue". Ela é usada para pular
 * a iteração atual e continuar com a próxima, ela volta para a condição.
 */

for(let i = 0; i < 10; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}

console.log("Fim");
/**
 * Neste exemplo, quando o valor de i(index) é igual a 5, a 
 * palavra-chave "continue" é usada para pular a iteração atual e
 * continuar com a próxima. Portanto o número 5 não será apresentado
 */