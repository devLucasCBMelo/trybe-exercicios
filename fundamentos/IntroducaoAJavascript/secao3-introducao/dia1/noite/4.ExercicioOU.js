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
