/**
 * Crie um array com 4 nomes: John, Paul, Ringo e George
 * Crie um loop que mostre os nomes no console exceto o nome Paul.
 */

let names = ["John", "Paul", "Ringo", "George"];

//1 forma
for(let i = 0; i < names.length; i++)
{
    if(names[i] === "Paul"){
        continue;
    }
    console.log(names[i]);
}

//2 forma
for(let name of names){
    if(name == 'Paul'){
        continue;
    }
    console.log(name);
}