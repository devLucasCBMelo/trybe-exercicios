// Exercicio de colocar os números em ordem crescente dentro da Array

function ordemCrescente(numbers){

    for(index = 0; index < numbers.length; index += 1){
        for(indexCompare = index +1; indexCompare < numbers.length; indexCompare += 1)

            if(numbers[index] > numbers[indexCompare]){

                let temp = numbers[index];

                numbers[index] = numbers[indexCompare];

                numbers[indexCompare] = temp;

            } else {



        }

    }

    return `a ordem crescente dos elementos é ${numbers}`;
};

console.log(ordemCrescente([5,2,6,9,3]));