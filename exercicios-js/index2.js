//EXERCICIO 1 

let num1 = 20;
let num2 = 10;

console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);


// EXERCICIO 2

let num3 = 42;
let num4 = 35;
let temperatura = "ta quente\n";

if (num3 > num4) {
    console.log(`o número ${num3} é maior do que ${num4}\n`);
} else {
    console.log(`o número ${num3} é menor do que o número ${num4}\n`);
}

//EXERCICIO 3

let num5 = 22;
let num6 = 31;
let num7 = 54; 

if(num5>num6 && num5>num7){
    console.log(`o número ${num5} é o maior de todos\n`);
} else if (num5<num6 && num6>num7){
    console.log(`o número ${num6} é o maior de todos\n`)
} else{
    console.log(`o último é o maior de todos\n`)
}


//EXERCICIO 4 

let angulo1 = 30;
let angulo2 = 40;
let angulo3 = 120;
let message ="";


if(angulo1 < 0 || angulo2 < 0 || angulo3 <0){
    message = "possui um ângulo inválido\n"
} else if(angulo1+angulo2+angulo3 === 180){
        message = "são angulos de um triângulo\n"
    }else{
        message = "não são angulos de um triângulo\n"
    }
    
    console.log(message);

    
//EXERCICO 5

let carrinho = "uvas";

switch(carrinho){
    case "laranjas":
        console.log("As laranjas custam R$ 2,00 o quilo\n");
        break;
    case "bananas":
        console.log("As bananas custam R$ 3,00 o quilo\n");
        break;
    case "uvas":
        console.log("As uvas custam R$ 1,00 o quilo\n");
        break;        
}

var Animal = 'Girafa';
switch (Animal) {
    case 'Vaca':
    case 'Girafa':
    case 'Cachorro':
    case 'Porco':
        console.log('Esse animal irá para Arca de Noé\n');
        break;
    case 'Dinossauro':
        break;
    default:
        console.log('Esse animal não vai.\n');
}


//Ainda dentro do exercicio 5, mas caso Xadrez

let brick = "cavalo";

switch(brick){
    case "peão":
        console.log("move 1 casa na ortogonal\n");
        break;
    case "cavalo":
        console.log("anda em L\n"); 
        break;
    case "bispo":
        console.log("anda nas diagonais\n");  
}
 

// EXERCICIO 7

let salarioBruto = 1500.10; 
let aliquotaIR;
let aliquotaINSS;

if (salarioBruto <= 1556.94){
    aliquotaINSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92){
    aliquotaINSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82){
    aliquotaINSS = salarioBruto * 0.11;
} else if (salarioBruto < 5189.82){
    aliquotaINSS = 570.99;
}
