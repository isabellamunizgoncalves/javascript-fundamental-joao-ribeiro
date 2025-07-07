const cities = ['New York', 'Rio de Janeiro', 'Tokyo', 'Los Angeles'];

//podemos iterar sobre um array usando um ciclo for
for(let i = 0; i < cities.length; i++){
    console.log(cities[i]);
}

//mas também podemos utilizar o método map() que percorre todo o array:

cities.map(city => console.log(city));