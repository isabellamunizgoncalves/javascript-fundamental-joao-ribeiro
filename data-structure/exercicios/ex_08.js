//objeto do tipo: array de arrays

let students = [
    {
        name: 'Isabella',
        surname: 'Gonçalves',
    },
    {
        name: 'Henrique',
        surname: 'Gonçalves',
    },
    {
        name: 'Victor',
        surname: 'Hameze',
    }
];

students.push(
    {name:'Noeme', surname: 'Ramos'}, 
    {name: 'Hamilton', surname: 'Gonçalves'},
    {name: 'Rosa', surname: 'Rodrigues'},
    {name: 'Eli', surname: 'Ramos'}
);

for(let i = 0; i < students.length; i++){
    console.log(students[i].name, students[i].surname);
}