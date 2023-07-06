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
let temperatura = "ta quente";

if (num3 > num4) {
    console.log(`o número ${num3} é maior do que ${num4}`);
} else {
    console.log(`o número ${num3} é menor do que o número ${num4}`);
}

//EXERCICIO 3

let num5 = 22;
let num6 = 31;
let num7 = 54; 

if(num5>num6 && num5>num7){
    console.log(`o número ${num5} é o maior de todos`);
} else if (num5<num6 && num6>num7){
    console.log(`o número ${num6} é o maior de todos`)
} else{
    console.log(`o último é o maior de todos`)
}
