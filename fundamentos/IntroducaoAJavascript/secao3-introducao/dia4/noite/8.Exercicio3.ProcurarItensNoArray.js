const school = {
    lessons: [
      {
        course: 'Python',
        students: 20,
        professor: 'Carlos Patrício',
        shift: 'Manhã',
      },
      {
        course: 'Kotlin',
        students: 10,
        professor: 'Gabriel Oliva',
        shift: 'Noite',
      },
      {
        course: 'JavaScript',
        students: 738,
        professor: 'Gustavo Caetano',
        shift: 'Tarde',
      },
      {
        course: 'MongoDB',
        students: 50,
        shift: 'Noite',
      },
    ]
  };

//Crie uma função que obtenha o valor da chave de acordo com sua posição no array. Essa função deve possuir dois parâmetros: o objeto e a posição no array.

const obterValorPorNumero = (object, index) =>  Object.values(object)[index];

//console.log(obterValorPorNumero(school, 0));


//Crie uma função que retorne a soma do número total de estudantes em todos os cursos.

const totalStudentes = (obj) => {

    let count = 0; 

    for(let index =0; index < obj.lessons.length; index += 1){

        count = count + obj.lessons[index].students;

    }

    return count;
}


console.log(totalStudentes(school));

//Crie uma função que verifica se uma determinada chave existe em todos os elementos do array lessons. O retorno deve ser um booleano (true ou false). Essa função deve possuir dois parâmetros: o objeto e o nome da chave.

const verifyExist = (obj2, name) => {

    for(let index = 0; index < obj2.lessons.length; index +=1){

        if(obj2.lessons[index][name] === "undefined"){
    
            return true;
    
        } else {
    
            return false;
    
        }
    }
};

console.log(verifyExist(school, "Classrooms"));

//Crie uma função para alterar o turno para noite no curso de Python. Essa função deve ter três parâmetros: a base de dados a ser modificada, o nome do curso e o novo valor da chave.

const modifyShift = (obj3, key, value) => {

//Primeiro temos que achar o curso pelo qual o aluno quer trocar o horário

    let findCourse; 

    for(let index = 0; index < obj3.lessons.length; index +=1){

        let element = obj3.lessons[index];

        if(element.course === key){
            findCourse = element;
        }
    
    }

    // Condição para exibir o resultado. Caso o findCourse seja undefined, significa que o curso não foi encontrado.

    if(findCourse !== undefined){
        findCourse.shift = value;
        return findCourse;
    } else {
        return `Curso não encontrado.`;
    }
};

console.log(modifyShift(school, "Python", "Noite"));