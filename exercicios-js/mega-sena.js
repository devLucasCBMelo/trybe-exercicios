// Desafio da Mega-Sena 

//A mega-sena é um jogo onde o usuário escolhe 6 números entre 1 e 60 
// e são sorteados são 6 números pela máquina, é feita a comparação e se acertar os 6, ele leva o premio


let myNumbers = [5, 7, 21, 6, 45, 75, 32];
let loterryNumbers = [];


for (let index = 0; index < myNumbers.length; index = index + 1){
    loterryNumbers.push(Math.ceil(Math.random() * 60));
};

console.log(loterryNumbers);

//Comparação do sorteio com o jogo do usuário

let count = 0;
let acertos = [];

for (let indexLottery = 0; indexLottery < loterryNumbers.length; indexLottery = indexLottery + 1){

    for(let indexGame = 0; indexGame < myNumbers.length; indexGame = indexGame + 1){
        if(loterryNumbers[indexLottery] === myNumbers[indexGame]){
            count = count + 1;
            acertos.push(loterryNumbers[indexLottery]);
        }
    }
}
//Quantidade de acertos
console.log(`Os número da loteria foram: ${loterryNumbers}`);
console.log(`Os números que o usuário escolheu foram: ${myNumbers}`);
console.log(count);
console.log(acertos);