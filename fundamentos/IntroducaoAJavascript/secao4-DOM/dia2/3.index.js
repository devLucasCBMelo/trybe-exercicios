// Crie um irmão para elementoOndeVOceESta

let quintoFilho = document.createElement('div');
quintoFilho.innerText = 'quinto filho criado';
let parent = document.getElementById('pai');
parent.appendChild(quintoFilho);

//CRie um filho para elementoONdeVoceEsta
let terceiroFilhoElementoOndeVoceEsta = document.createElement('p');
terceiroFilhoElementoOndeVoceEsta.innerText = 'terceiro filho de elemento e neto do Pai';
let parent2 = document.getElementById('elementoOndeVoceEsta');
parent2.appendChild(terceiroFilhoElementoOndeVoceEsta);


//Crie um filho para primeiroFilhoDoFilho

let bisnetoDoPai = document.createElement('p');
bisnetoDoPai.innerText = 'Filho do primeiro filho do filho, ou seja, bisneto do pai';
let parent3 = document.getElementById('primeiroFilhoDoFilho');
parent3.appendChild(bisnetoDoPai);

//A partir desse filho criado, acesse terceiroFilho

const acesso = bisnetoDoPai.parentElement.parentElement.nextElementSibling;
console.log(acesso);