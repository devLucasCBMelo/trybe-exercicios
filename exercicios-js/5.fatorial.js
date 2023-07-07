//Desafio fatorial ////////////////////////////////////////////////////////////////////////


let fatorial = 10;
let array = [];
let multiplica = 1;

for (let index = 1; index <= fatorial; index = index + 1){
    array.push(index);
    multiplica = multiplica * index;
}

console.log(`O resultado do fatorial de ${fatorial} é: ${multiplica}`);
console.log(array);
