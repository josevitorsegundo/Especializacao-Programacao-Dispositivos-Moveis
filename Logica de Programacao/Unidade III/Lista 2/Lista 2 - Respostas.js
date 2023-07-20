const prompt = require("prompt-sync")();
function questao1 (){    
    var soma=0;
    var num = parseInt(prompt("Digite um número: "));   

    for (var i=1; i<num; i++){
         if (num%i==0){
            soma+=i
         }
    }
    if(soma==num) {
        console.log("É número perfeito");
    } else {
        console.log("Não é número perfeito");
    }
}

function questao2 (){    
   var num = parseInt(prompt("Digite um número de 4 digitos: "));   
   var stringNum = num.toString();
   var strNumInverse = "";

    for (var i=stringNum.length; i>0; i--){
         strNumInverse +=stringNum[i-1] 
    }

    console.log("\nArray Invertido: ");
    console.log(strNumInverse);
}

function questao3 (){    
    var num = parseInt(prompt("Digite um número: "));   
    var stringNum = num.toString();
    var strNumInverse = "";

    for (var i=stringNum.length; i>0; i--){
         strNumInverse +=stringNum[i-1] 
    }

    if (stringNum == strNumInverse){
        console.log("\nÉ palíndromo");
    } else {
        console.log("\nNão é palíndromo");
    }
}

function questao4 (){    
    const TESTE = true;
    const altura = TESTE? parseFloat(prompt("Digite a altura do muro: ")):1000;//1000
    const subida = TESTE?parseFloat(prompt("Digite a subida: ")):100;//100
    const descida = TESTE?parseFloat(prompt("Digite a descida: ")):50;//50

    var dias = 0, subidaDia = altura, cond=true;


    while(cond){
        dias++;
        subidaDia = subidaDia - subida;
        if (subidaDia <= 0){
            cond = false;
            break;
        }
        subidaDia = subidaDia + descida;
    }

    console.log("\nDias para lesma subir: "+(dias))
}

function questao5 (){    
    var valor = parseFloat(prompt("Digite o valor: "));   
    var parcelas = parseInt(prompt("Digite a quantidade de parcelas: ")); 
    var stringParcelas = "Parcelas: "; 

    var valorParcela =  parseInt(valor/parcelas);
    var resto = parseInt(valor%parcelas);
    var acc = 0;


    console.log("resto: "+resto)

    for (var i = 0; i< parcelas-1; i++) {
        if (resto != 0){
            if(i<resto) {
                acc = 1;
            }
        }
        
        stringParcelas += (valorParcela+acc) + ", "
        acc = 0;
    }
    stringParcelas = stringParcelas.slice(0,-2);
    stringParcelas += " e "+valorParcela + "."
    console.log(stringParcelas)
}