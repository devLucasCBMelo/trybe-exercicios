// Requisito 2 - Crie a função getHighestIndex


function getHighestIndex(array){

    let maiorNumero = array[0];
    let posicaoNoArray = 0;

    for(let index = 1; index < array.length; index += 1){
        if(array[index] > maiorNumero){
            maiorNumero = array[index];
            posicaoNoArray = index;
        }
    }

    return posicaoNoArray;

  };
  
  console.log(getHighestIndex([4, 8, 3, 14, 7]));