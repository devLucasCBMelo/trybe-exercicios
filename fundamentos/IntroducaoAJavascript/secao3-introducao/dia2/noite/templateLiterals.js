const produto = "iphone";
const valor = 5000;
const desconto = 10;

const message = 
`Produto: ${produto}
valor: R$ ${valor}
Desconto: R$ ${desconto}%
Preço com desconto: R$ ${(valor - (valor * (desconto/100))).toFixed(2)}
`;

console.log(message);




//arrays 
const shopping = ["Sabão em pó","Macarrão","Leite em pó","Refrigerante","Macã","Alface","Nescau"];

console.log(shopping);

console.log(shopping[0]);

console.log(shopping.length);

console.log(shopping[shopping.length-1]);


//Exercicio da aula 

const menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
const menuServices = menu[1];


console.log(menuServices);

//exercicio 2 da aula 

const menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu2.push("Contato");

console.log(menu2);





// Array de números
const numbers = [2, 19, 23, 4, 8, 10];

// Variável complementar que irá acumular os valores da somados
let sum = 0;

// Loop for, que irá iterar da posição 0 até o último elemento do array
// A variável sum sempre irá receber o valor atual dela + o número do array
for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
};

console.log(sum);