document.getElementsByClassName('piloto-f1-atual')[0].innerText = 'Stroll'

let pilotosF2Atual = document.getElementsByClassName('piloto-f2-atual')

for (let index = 0; index < pilotosF2Atual.length; index += 1) {
    pilotosF2Atual[index].innerText = 'Valteri Bottas'
}