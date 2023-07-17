const randomIndex = (number) => Math.floor(Math.random() * number);

const students35 = {
  studentsInfo: [
    {
      picture: "./images/anadu.jpg",
      trybe: "CH35",
      studentName: "AnaDu",
      projectLessonsLearned: randomIndex(6), 
      projectPirilampo: randomIndex(56),
      projectPixelsArt: randomIndex(41),
    },
    {
      picture: "./images/cadu.png",
      trybe: "CH35",
      studentName: "Cadu",
      projectLessonsLearned: randomIndex(6), 
      projectPirilampo: randomIndex(56),
      projectPixelsArt: randomIndex(41),
    },
    {
      picture: "./images/gus.png",
      trybe: "CH35",
      studentName: "Gus",
      projectLessonsLearned: randomIndex(6), 
      projectPirilampo: randomIndex(56),
      projectPixelsArt: randomIndex(41),
    },
    {
      picture: "./images/luquinha.jpg",
      trybe: "CH35",
      studentName: "Luquinha",
      projectLessonsLearned: randomIndex(6), 
      projectPirilampo: randomIndex(56),
      projectPixelsArt: randomIndex(41),
    },
    {
      picture: "./images/nat.png",
      trybe: "CH35",
      studentName: "Nat",
      projectLessonsLearned: 5, 
      projectPirilampo: 45,
      projectPixelsArt: 40,
    },
    {
      picture: "./images/rods.png",
      trybe: "CH35",
      studentName: "Rods",
      projectLessonsLearned: randomIndex(6), 
      projectPirilampo: randomIndex(56),
      projectPixelsArt: randomIndex(41),
    },
    {
      picture: "./images/thayna.png",
      trybe: "CH35",
      studentName: "Tatá",
      projectLessonsLearned: randomIndex(6), 
      projectPirilampo: randomIndex(56),
      projectPixelsArt: randomIndex(41),
    },
    {
      picture: "./images/vic.png",
      trybe: "CH35",
      studentName: "Vic",
      projectLessonsLearned: randomIndex(6), 
      projectPirilampo: randomIndex(56),
      projectPixelsArt: randomIndex(41),
    },
    {
      picture: "./images/vitor.png",
      trybe: "CH35",
      studentName: "Vitor",
      projectLessonsLearned: randomIndex(6), 
      projectPirilampo: randomIndex(56),
      projectPixelsArt: randomIndex(41),
    },
  ]
}

const studentName = document.querySelector('#name');
const lessonsLearned = document.getElementById('gradeLessonsLearned');
const pirilampo = document.getElementById('gradePirilampo');
const pixelsArt = document.getElementById('gradePixelsArt');
const picture = document.getElementById('picture');
const result = document.getElementById('results');

const title = document.querySelectorAll('h2');
for (let index = 0; index < title.length; index +=1) {
    title[index].style.color = 'magenta'
}

const getStudentInfo = () => {
  const array = students35.studentsInfo;
  const number = randomIndex(array.length);

  studentName.innerText = array[number].studentName;
  lessonsLearned.innerText = array[number].projectLessonsLearned;
  pirilampo.innerText = array[number].projectPirilampo;
  pixelsArt.innerText = array[number].projectPixelsArt;
  picture.src = array[number].picture;
  // result.innerText = 'Ainda nada!'
  verifYScore();
}

const verifYScore = () => {
  const sum = parseInt(lessonsLearned.innerText) + parseInt(pirilampo.innerText) + parseInt(pixelsArt.innerText);

  if (sum >= 85) {
    result.innerText = `${sum} - Meus parabéns, você foi aprovada(o)`;
    result.className = 'green';
  } else {
    result.innerText = `${sum} - Sinto muito, você não foi aprovada(o). Estude mais!!!`;
    result.className = 'red';
  }
}

randomIndex();
getStudentInfo(); 