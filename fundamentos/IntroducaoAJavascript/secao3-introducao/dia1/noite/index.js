const Myname = "Lucas";
const birthCity = "Salvador";
const birthYear = 1996;

console.log(Myname);
console.log(birthCity);
console.log(birthYear);

// Nomeando variáveis para armazenar strings
const fullName = "João Silva";
const city = "São Paulo";

// Nomeando variáveis para armazenar números
const age = 30;
const height = 1.75;

console.log(fullName);
console.log(height);

//COndição if e else 

const idade = "18";
let checarIdade; 

if(idade>22){
    checarIdade = "é maior de idade ";
} else if(idade === "18"){
    checarIdade = "a idade perfeita";
} else{
    checarIdade = "menor de idade";
}

console.log(checarIdade);

const idade2 = "19";
const checarIdade2 = idade2 > 18? "é maior de idade" : "é menor de idade";
console.log(checarIdade2);