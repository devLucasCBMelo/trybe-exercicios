// Desafio da Mega-Sena 

//A mega-sena é um jogo onde o usuário escolhe 6 números entre 1 e 60 
// e são sorteados são 6 números pela máquina, é feita a comparação e se acertar os 6, ele leva o premio


let myNumbers = [5, 7, 21, 6, 45, 75, 32];
let lotteryNumbers = [];


for (let index = 0; index < myNumbers.length; index = index + 1){

    let randomNumber = Math.ceil(Math.random() * 60);

    if(!lotteryNumbers.includes(randomNumber)){
        lotteryNumbers.push(randomNumber);
    } else {
        index = index - 1;
    }
};

console.log(lotteryNumbers);

//Comparação do sorteio com o jogo do usuário

let count = 0;
let acertos = [];

for (let indexLottery = 0; indexLottery < lotteryNumbers.length; indexLottery = indexLottery + 1){

    for(let indexGame = 0; indexGame < myNumbers.length; indexGame = indexGame + 1){
        if(lotteryNumbers[indexLottery] === myNumbers[indexGame]){
            count = count + 1;
            acertos.push(lotteryNumbers[indexLottery]);
        }
    }
}
//Quantidade de acertos
console.log(`Os números da loteria foram: ${lotteryNumbers}`);
console.log(`Os números que o usuário escolheu foram: ${myNumbers}`);
console.log(count);
console.log(acertos);