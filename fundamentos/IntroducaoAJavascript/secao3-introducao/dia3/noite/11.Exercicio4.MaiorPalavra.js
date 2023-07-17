// Requisito 4 - Crie a função getLongestWord

function getLongestWord(words){

    let maiorPalavra = words[0];

    for(index = 1; index < words.length; index += 1){
        if(words[index].length > maiorPalavra.length){
            maiorPalavra = words[index];
        }
    }
    return maiorPalavra;
}

console.log(getLongestWord(["Lucas","Luca","Gabriela"]));