// Requisito 1 - Crie a função verifyPalindrome

function verifyPalindrome(palavra) {
    reverseWord = palavra.split('').reverse().join('');
  
    if (palavra === reverseWord) {
      return 'true';
    }
    return 'false';
  }

console.log(verifyPalindrome('arara'));