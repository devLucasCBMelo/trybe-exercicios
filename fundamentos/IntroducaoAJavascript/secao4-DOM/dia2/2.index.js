// Acesse o elemento where-are-you
const ondeEsta = document.getElementById('where-are-you');


// Acesse parent a partir de where-are-you e adicione uma color a ele.
const parentColor = ondeEsta.parentNode;
parentColor.style.color = 'rgb(255, 2, 164)';

// Acesse o first-child-of-child e adicione um texto a ele.
const addText = ondeEsta.firstElementChild;
addText.innerText = 'Texto aleatório do primeiro filho do filho';


// Acesse o first-child a partir de parent.
const firstOne = document.getElementById('parent').firstChild;


// Acesse o first-child a partir de where-are-you.
const previous = ondeEsta.previousElementSibling
