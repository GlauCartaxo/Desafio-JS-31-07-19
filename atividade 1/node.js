var sequencia = [];//variavel para determinar o numero de casas


function Ordenanumeros(sequencia) {
    var Qnumero = window.prompt("digite a quantidade de numeros que serão inseridos"); 
    var primo =0;// inicialisação da variavel que vai determonar a quantodade de numeros primos
    for (i = 0; i < Qnumero; i++) { //loop para receber o numero

        var numero = prompt("digite um numero");
        sequencia.push(numero);//por o numero dentro da array
        var qd=0; //variavel para identificar se o numero é dividido só mente por 1 e ele mesmo 

        for(j=1;j<=numero;j++){//loop para identificar se o numero pe primo
        if(numero % j == 0){//caso o numero seja dividido por 1 e ele mesmo somente sera adicionado num somador de quantidade de divisoes possivel
            qd++;
        }
        }
        if(qd == 2){    // caso o somatorio das divisoes possiveis for 2 o numero é primo int se adiciona 1 na na variavel primo
            primo++;
        }else{}

        //printar no console
        console.log(sequencia);
        console.log(primo);
        
    }
    return primo;
}
Ordenanumeros(sequencia);