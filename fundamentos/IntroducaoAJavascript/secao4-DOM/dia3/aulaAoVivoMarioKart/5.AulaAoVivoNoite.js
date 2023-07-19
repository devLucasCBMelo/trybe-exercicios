window.onload = () => {
    // Captura dos elementos
    const startBtn = document.getElementById('start-race-btn');
    const resetBtn = document.getElementById('reset-race-btn');
    const player1 = document.getElementById('player1');
    const player2 = document.getElementById('player2');
    const audioWinner = document.getElementById('audioWinner');
    const cars = document.getElementsByClassName('car');
    const alternatives = document.getElementsByClassName('playersImages');

    player1.style.marginLeft = 0;
    player2.style.marginLeft = 0;

    startBtn.addEventListener('click', (event) => {
        if (cars[0].style.backgroundImage !== '' && cars[1].style.backgroundImage !== '') {
          player1.style.marginLeft = parseInt(player1.style.marginLeft) + Math.random() * 200 + 'px';
          player2.style.marginLeft = parseInt(player2.style.marginLeft) + Math.random() * 200 + 'px';
      
          const player1Win = parseInt(player1.style.marginLeft) > window.innerWidth;
          const player2Win = parseInt(player2.style.marginLeft) > window.innerWidth;

         if (player1Win) {
             alert('PLAYER 1 GANHOU!!!');
             audioWinner.play();
             resetCars();
            }

         if (player2Win) {
             alert('PLAYER 2 GANHOU!!!');
             audioWinner.play();
             resetCars();
            }
        } else {
            alert('Escolha 2 personagens!')
        }
    });

    const resetCars = () => {
        player1.style.marginLeft = 0;
        player2.style.marginLeft = 0;
    };

    resetBtn.addEventListener('click', resetCars);

    //SELECIONAR PLAYER

    for (let index = 0; index < cars.length; index += 1) {
        cars[index].addEventListener('click', (event) => {
            const playerSelected = document.querySelector('.selected');
            if (playerSelected) {
                playerSelected.classList.remove('selected');
            }
            event.target.classList.add('selected');
        })
    };

    //SELECIONAR PERSONAGEM 
    for (let index = 0; index < alternatives.length; index += 1) {
        alternatives[index].addEventListener('click', (event) => {
            const playerSelected = document.querySelector('.selected');
            if (playerSelected) {
                playerSelected.style.backgroundImage = `url(${event.target.src})`;
                playerSelected.classList.remove('selected');
            }
        })
    }
};