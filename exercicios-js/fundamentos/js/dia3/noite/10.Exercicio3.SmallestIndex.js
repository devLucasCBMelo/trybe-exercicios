// Requisito 3 - Crie a função getSmallestIndex

function getSmallestIndex(array){

    let menorNumero = array[0];
    let posicaonoArray = 0;

    for(index = 1; index < array.length; index += 1){
        if(array[index] < menorNumero){
            menorNumero = array[index];
            posicaonoArray = index;
        }
    };
    return posicaonoArray;
}
    console.log(getSmallestIndex([24,4,1,35,60]));