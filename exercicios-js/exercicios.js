const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log(numbers);

let somaNumbers = 0;

for (let index = 0; index < numbers.length; index = index + 1) {
    somaNumbers = somaNumbers + numbers[index];
    
}

//Descobrindo a média////////////////////////////////////////////////////////////////////////////// 

console.log(somaNumbers);

let media = 0;

for (let index = 0; index < numbers.length; index = index +1){
    media = somaNumbers / numbers.length;
}

console.log(media);

if(media>20){
    console.log("O valor da média aritmética é maior do que 20");
} else {
    console.log("O valor da média aritmética é menor ou igual a 20");
}

//Descobrindo o maior valor////////////////////////////////////////////////////////////////////////////// 

// Inicie a variável com o primeiro valor do array. Assim, é possível pular a posição 0 e iniciar o for com index = 1.

let maiorNumero = numbers[0];

for (let index = 1; index < numbers.length; index = index +1){
    if(numbers[index] > maiorNumero){
        maiorNumero = numbers[index];
    } else {
        maiorNumero = maiorNumero;
    }
}

console.log(maiorNumero);









