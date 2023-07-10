// SEGUNDO O APP, É PRECISO REDUZIR O CÓDIGO PARA QUE FIQUE UM LOOP SÓ

function countHighestNumberMaxOccurrences(array) {
  let qtdRepete = 0;
  let maiorNumero = array[0];
  
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maiorNumero) {
      maiorNumero = array[index];
      qtdRepete = 1;
    } else if (array[index] === maiorNumero) {
      qtdRepete += 1;
    }
  }
  
  return qtdRepete;
}

console.log(countHighestNumberMaxOccurrences([0, 0, 0]));

  