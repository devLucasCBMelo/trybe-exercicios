// Exercicio de colocar os números em ordem crescente dentro da Array

function ordemCrescente(numbers){

    for(index = 0; index < numbers.length; index += 1){

        if(numbers[index] > numbers[index + 1]){

            numbers[index +1] = numbers[index];

        } else {



        }

    }

    return `a ordem crescente dos elementos é ${numbers}`;
};

console.log(ordemCrescente([5,2,6,9,3]));