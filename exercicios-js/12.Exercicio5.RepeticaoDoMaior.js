// Requisito 5 - Crie a função countHighestNumberMaxOccurrences

function countHighestNumberMaxOccurrences(array){
    let qtdRepete = 0;
    let maiorNumero = array[0];

    for(let index = 1; index < array.length; index += 1){
        if(array[index] > maiorNumero){
            maiorNumero = array[index];
        }
    }

    for(let index2 = 0; index2 < array.length; index2 += 1){
        if(array[index2] === maiorNumero){
            qtdRepete = qtdRepete + 1;
        }
    }
    return qtdRepete;
}

console.log(countHighestNumberMaxOccurrences([0,0,0]));