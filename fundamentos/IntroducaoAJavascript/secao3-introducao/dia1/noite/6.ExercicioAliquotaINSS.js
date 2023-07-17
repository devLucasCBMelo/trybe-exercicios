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
