//Descobrindo os valores ímpares ////////////////////////////////////////////////////////////////////////

let checar = 0;

for (let index = 0; index < numbers.length; index = index +1){
    if(numbers[index] %2 !== 0){
        checar = checar + 1;
    }
};

if(checar === 0){
    console.log("Nenhum valor ímpar encontrado!");
} else {
    console.log(checar);
}