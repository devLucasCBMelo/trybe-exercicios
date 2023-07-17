const stockProducts = [
    {
        'name': 'panquecas',
        'local': 'manaíra',
        'vitaminas': {
            'vitamina1': 8,
            'vitamina2': 18,
        }
    }
];

let keys = Object.keys(stockProducts[0].vitaminas);

console.log(keys);