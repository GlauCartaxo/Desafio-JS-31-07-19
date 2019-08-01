// recebo uma frase do usuario
var fraseUsuario = window.prompt("digite uma frase para verificar se é palindromo");

// função para verificar se a frase é um palindromo
function VerificarPalindromo(fraseUsuario){ 

// coloco tudo em minusculas para não ter diferenciasção entre maiusculas e minusculas
fraseUsuario = fraseUsuario.toLowerCase().replace(); 

// uso a função split para transformar em array e emseguida uso o reverse para inverter as casas do array e depois transformo em string novamente
    fraseInversa = fraseUsuario.split("").reverse().toString();  

//uso o for para percorrer a frase como um completo
    for (var i = 0; i < ((fraseInversa.length)-1); i++) {

// para aqui usar o .replace para remover as virgulas e caracteres não afetarem a identificação
    fraseInversa=fraseInversa.replace(",","");}

// if else para verifivar se a frase é um palindromo ou não
    if (fraseUsuario == fraseInversa) {
        console.log("é palindromo");
        return true;
    } else {
        console.log("não é palindromo");
        return false;
    }



}

VerificarPalindromo(fraseUsuario); //chamo a funçãao
   
