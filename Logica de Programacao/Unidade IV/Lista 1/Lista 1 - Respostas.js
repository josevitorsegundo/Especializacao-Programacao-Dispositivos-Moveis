const prompt = require("prompt-sync")();
function questao1 (x){    
    return x*x;
}

function questao2 (dataEntrada){    
   const dataAux = dataEntrada.split("/");

   var dia = parseInt(dataAux[0])
   var mes = parseInt(dataAux[1])
   var ano = parseInt(dataAux[2])

   var stringData
   var mesExtenso

   if (mes==1) {
    mesExtenso = "janeiro"
   } else if (mes == 2){
    mesExtenso = "fevereiro"
   } else if (mes == 3){
    mesExtenso = "março"
   } else if (mes == 4){
    mesExtenso = "abril"
   } else if (mes == 5){
    mesExtenso = "maio"
   } else if (mes == 6){
    mesExtenso = "junho"
   } else if (mes == 7){
    mesExtenso = "julho"
   } else if (mes == 8){
    mesExtenso = "agosto"
   } else if (mes == 9){
    mesExtenso = "setembro"
   } else if (mes == 10){
    mesExtenso = "outubro"
   } else if (mes == 11){
    mesExtenso = "novembro"
   }else if (mes == 12){
    mesExtenso = "dezembro"
   } else {
    return "Mês inválido"
   }

   stringData = dia + " de " + mesExtenso + " de "+ ano;
   return stringData;

}

function questao3 (raio){    
    return (4*3.14*Math.pow(raio,3))/3
}

function questao4 (horas, minutos, segundos){    
   return  (horas * 360) + (minutos * 60) + segundos
}

function questao5 (x, y, z){    
    if (triangulo (x, y, z)){
        return tipoTriangulo (x, y, z);
    } else {
        return "Não é triangulo";
    }
}

function triangulo (x, y, z){
    if (x < y+z){
        if (y<x+z) {
            if (z<x+y){
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    } else {
        return false
    }
}

function tipoTriangulo (x, y, z){
    if (x==y && y == z) {
        return "Triangulo equilátero"
    }

    if (x==y || y == z) {
        return "Triangulo isósceles"
    }

    if ((x!=y && y != z) && x != z ) {
        return "Triangulo escaleno"
    }
}

function questao6 (){    
    var lanc_1 =0, lanc_2 =0, lanc_3 =0, lanc_4 =0, lanc_5 =0, lanc_6 =0
    var erro=0;
    var valor
    for (var i=0; i< 1000000; i++) {
        valor = getRandomIntInclusive(1, 6);
        if (valor == 1){
            lanc_1++;
        } else if (valor == 2) {
            lanc_2++;
        } else if (valor == 3) {
            lanc_3++;
        } else if (valor == 4) {
            lanc_4++;
        } else if (valor == 5) {
            lanc_5++;
        } else if (valor == 6) {
            lanc_6++;
        } else {
            erro++;
        }
    }

    var msg = "Frequencia lançamentos 1: "+lanc_1+" - 2: "+lanc_2+
        " - 3: "+lanc_3+" - 4: "+lanc_4+" - 5: "+lanc_5+ " - 6: "+lanc_6
    return msg
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function questao7Parte1 (num){    
    var cont = 0; 
    for (var i = 0; i<=num; i++){
        if (num%i==0) {
            cont++;
        }
    }
    if(cont == 2){
        return "Primo"
    } else {
        return "Não é primo"
    }
}

function questao7Parte2 (num){    
    var cont = 0; 
    var stringPrimos = "";
    for (var i = 1; i<=num; i++){
        for (var j = 1; j <= i; j++){
            if (i%j==0) {
                cont++;
            }
        }
        if (cont == 2){
            stringPrimos += i + " - ";
        }
        cont = 0;
    }

    stringPrimos = stringPrimos.slice(0,-2);
    return stringPrimos;
}

function questao8 (){
    var horas = "";
    while(horas!='N' && horas!='n') {
        horas = prompt("Digite um horário ou N para cancelar: ");

        if (horas != 'N' && horas != 'n') {
            if (horas <10 && horas.length < 5){
                horas = "0"+horas
            }
            questao8Conversao(horas.slice(0,2), horas.slice(3,5));
        }
    }
    return null
}

function questao8Conversao(horas, minutos){
    console.log(horas+" - "+ minutos)
    var horasAux = parseInt(horas);
    var minutosAux = parseInt(minutos);
    var indicadorTurno
    
    if(horasAux>=12){
        indicadorTurno = 'P'
        if (horasAux == 13) {
            horasAux = 1
        } else if (horasAux == 14){
            horasAux = 2
        } else if (horasAux == 15){
            horasAux = 3
        }else if (horasAux == 16){
            horasAux = 4
        }else if (horasAux == 17){
            horasAux = 5
        }else if (horasAux == 18){
            horasAux = 6
        }else if (horasAux == 19){
            horasAux = 7
        }else if (horasAux == 20){
            horasAux = 8
        }else if (horasAux == 21){
            horasAux = 9
        }else if (horasAux == 22){
            horasAux = 10
        }else if (horasAux == 23){
            horasAux = 11
        }
    } else {
        indicadorTurno = 'A'
    }   
    return questao8Saida(horasAux,minutosAux,indicadorTurno);
}

function questao8Saida(horas, minutos, turno){
    valorAux = horas + ":" + minutos + " " + (turno == 'A' ? "A.M" : "P.M")
    console.log(valorAux)
    return valorAux
}

function chamaFuncoes () {
    var retorno
    console.log("Questão 1: ");
    retorno = questao1 (10);
    console.log(retorno);

    console.log("\nQuestão 2: ");
    retorno = questao2("01/01/2000");
    console.log(retorno);

    console.log("\nQuestão 3: ");
    retorno = questao3(5);
    console.log(retorno);

    console.log("\nQuestão 4: ");
    retorno = questao4(2, 30, 45);
    console.log(retorno);

    console.log("\nQuestão 5: ");
    retorno = questao5(3, 2, 4);
    console.log(retorno);

    console.log("\nQuestão 6: ");
    retorno = questao6();
    console.log(retorno);

    console.log("\nQuestão 7 parte 1: ");
    retorno = questao7Parte1(5);
    console.log(retorno);

    console.log("\nQuestão 7 parte 2: ");
    retorno = questao7Parte2(29);
    console.log(retorno);

    console.log("\nQuestão 8: ");
    retorno = questao8();
}

chamaFuncoes ();