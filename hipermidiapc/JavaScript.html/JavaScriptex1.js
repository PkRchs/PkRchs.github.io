function MinhaPrimeiraFuncao() {
    var palavra = prompt('Digite aqui para verificar e é um palindromo:');
    if (palindromo(palavra)) {
        alert('Sim, esse número é um Palindromo');
    } else {
        alert('Não, esse número não é um Palindromo');
    }
    
};

function palindromo(palavra){
    palavraAuxiliar = palavra.toString();
    palavra.replace(' ', '')
    console.log(palavraAuxiliar);
    palavraReversa = palavraAuxiliar.split('').reverse().join('');
    return palavraReversa === palavraAuxiliar;
}