const products = [
    {
        product: "Leite",
        price: 3.49,
        available: true,
        categories: ["Laticínios","Bebidas"],
        stock: {
            quantity: 100,
            location: "Corredor 2, Prateleira C",
        },
        supplier: {
            name: "Laticínios Delícia",
            contact: {
                phone: "987654321",
                email: "contato@laticiosdelicia.com",
            },
        },
        reviews: [
            {user: "Cliente1", rating: 4},
            {user: "Cliente2", rating: 5},
            {user: "Cliente3", rating: 4},
        ]

    },
    {
        product: "Cereal",
        price: 4.99,
        available: true,
        categories: ["Café da Manhã","Mercearia"],
        stock: {
            quantity: 50,
            location: "Corredor 4, Prateleira A",
        },
        supplier: {
            name: "Comidas Saudáveis Ltda.",
            contact: {
                phone: "123456789",
                email: "contato@comidassaudaveis.com",
            },
        },
        reviews: [
            {user: "Cliente1", rating: 3},
            {user: "Cliente2", rating: 4},
            {user: "Cliente3", rating: 5},
        ],

    },
];

const countProducts = (array) => {
    let count = 0;
    for(let index = 0; index < array.length; index += 1) {
        count = count + array[index].stock.quantity;
    }
    return count;
};

console.log(countProducts(products));

const addProperty = (array, name) => {
    for(let index = 0; index < array.length; index += 1){
        array[index][name].push({user: "Cliente4", rating: 5});
    }
};

addProperty(products,"reviews");

console.log(products[0]);