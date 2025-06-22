let person = [
    {
        name: 'Anna',
        age: 28,
        maca: 2,
    },
    {
        name: 'Carl',
        age: 32,
        maca: 3,
    },
    {
        name: 'John',
        age: 42,
        maca: 5,
    },
];

console.log(
    'Total Anna :' , person[0].maca * 1.75, '\n',
    'Total Carl :' , person[1].maca * 1.75, '\n',
    'Total John :' , person[2].maca * 1.75, '\n',
);

console.log(
    (
        person[0].maca * 1.75 + 
        person[1].maca * 1.75 + 
        person[2].maca * 1.75
    )
);