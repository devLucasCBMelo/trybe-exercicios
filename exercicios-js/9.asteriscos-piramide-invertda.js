//Desafio dos asteriscos em pirâmide Invertida ////////////////////////////////////////////////////////////////////////

let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n - 1;

for (let lineIndex = 0; lineIndex < n; lineIndex = lineIndex + 1) {
  for (let columnIndex = 0; columnIndex < n; columnIndex = columnIndex + 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};