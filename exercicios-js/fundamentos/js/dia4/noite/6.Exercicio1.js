const reader = {
    name: 'Julia',
    lastName: 'Pessoa',
    age: 21,
    favoriteBooks: [
      {
        title: 'O Senhor dos Anéis - a Sociedade do Anel',
        author: 'J. R. R. Tolkien',
        publisher: 'Martins Fontes',
      },
    ],
  };

let keys = Object.keys(reader);
let values = Object.values(reader);
let entries = Object.entries(reader);

console.log(keys);
console.log(values);
console.log(entries);

console.log(`O livro favorito de ${reader.name} é ${reader.favoriteBooks[0].title}`);

//Adicionando uma nova propriedade

reader.favoriteBooks.push(
    {
        title: 'Harry Potter e o Prisioneiro de Azkaban',
        author: 'JK Rowling',
        publisher: 'Rocco',
    },
);

console.log(reader);

//Contando a quantidade de livros favoritos

let count = reader.favoriteBooks.length;

console.log(`${reader.name} tem ${count} livros favoritos!`);
