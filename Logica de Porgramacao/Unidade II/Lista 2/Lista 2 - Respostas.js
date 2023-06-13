function questao1 (nota1, nota2, nota3, nota4){
    var media = (nota1+nota2+nota3+nota4)/4
    var situacao = media<7?"Reprovado":"Aprovado"
    console.log("Média: "+media+" . A situação é: "+situacao)
    
} 

function questao2 (num){
    var mult = num%3
    if(mult==0){
        console.log("O número: "+num+" é múltiplo de 3.");
    } else {
        console.log("O número: "+num+" não é múltiplo de 3.");
    }    
} 

function questao3 (num1, num2) {
    if (num1<=num2) {
        console.log("O menor número é "+num1);
    } else if (num2 <= num1){
        console.log("O menor número "+num2);
    } 
}

function questao4 (num1, num2, num3) {
    if (num1>=num2 && num1>=num3) {
        console.log("O maior número é "+num1);
    } else if (num2>=num1 && num2 >= num3) {
        console.log("O maior número é "+num2);
    } else if (num3>=num1 && num3 >= num2) {
        console.log("O maior número é "+num3);
    } else  {
        console.log("Os número são iguais cujo valor é "+num1);
    }
}

function questao5 (num1, num2, op){
    var op = window.prompt("Digite a operação deseja de 1 a 4.\n1-Média\n2-Diferença\n3-Produto\n4-Divisão");
    var desc = "";
    if(op == 1 || op == "1"){
        var media = (num1 + num2) / 2;
        desc = "Média = "+media;        
    } else if (op == 2 || op == "2"){
        var diferenca = num1 > num2 ? num1 - num2 : num2 - num1;
        desc = "Diferença = "+diferenca;
    } else if (op == 3 || op == "3") {
        var produto = (num1 * num2);
        desc = "Produto = "+produto;
    } else {
        var divisao = (num1 / num2);
        desc = "Divisão = "+num1/num2;
    }
    console.log(desc);
    window.alert(desc);
}

function questao6 (num){
    for (var i = 1; i<= 10; i++){
        console.log(num+" x "+i+" = "+ (num*i))
    }
}

function questao7 (){
    var i =0;
    do {
        var op = window.prompt("Digite um número: ");
        window.alert("O quadrado de: "+op+" é igual a: "+parseFloat(op)*parseFloat(op));
        i++;
    } while(i<5)    
}

function questao8 (){
    var i =0 
    var contIdadeSup50=0, contIdade10a20=0, contPesoAbaixo40=0;
    var somaAltura10a20=0;
    var qtde = window.prompt("Digite quantas pessoas serão analisadas: ");

    do {
        var idade = window.prompt((i+1)+" - Digite a idade: ");
        var altura = window.prompt((i+1)+" - Digite a altura: ");
        var peso = window.prompt((i+1)+" - Digite o peso: ");
        
        if (parseInt(idade)>50) {
            contIdadeSup50++;
        }
        if (parseInt(idade) >= 10 && parseInt(idade) <= 20) {
            contIdade10a20++;            
            somaAltura10a20 += parseFloat(altura);           
        }
        if (parseFloat(peso)<40){
            contPesoAbaixo40++;
        }        
        i++;
    } while(i<qtde)    
    
    var msg = "Quantidade de pessoas superior a 50 anos: "+contIdadeSup50;
    msg += "\nMédia de altura das pessoas entre 10 e 20 anos: "+(somaAltura10a20/contIdade10a20).toFixed(2);
    msg += "\nPercentual de pessoas com peso abaixo de 40 quilos: "+((contPesoAbaixo40/qtde) * 100).toFixed(2)+"%"

    window.alert(msg);
}

function questao9 (){
    var i =0 
    var somaPar = 0, somaImpar = 0; 

    do {
        var num = window.prompt((i+1)+" - Digite o número: ");        
        
        if (parseFloat(num)%2==0) {
            somaPar += parseFloat(num);
        }
        else {
            somaImpar += parseFloat(num);
        }   
        i++;
    } while(i<10)    
    
    var msg = "Soma pares: "+somaPar;
    msg += "\nSoma impares: "+somaImpar;  

    window.alert(msg);
}

function questao10 (){
    var i= 0;
    var contIdadeSup50=0, somaAlturaSup50=0;
    
    do {
        var idade = window.prompt((i+1)+" - Digite a idade (Digite algum número menor ou igual a 0 para encerrar): ");
        if(parseInt(idade)>0) {            
            var altura = window.prompt((i+1)+" - Digite a altura: ");        
        }
        
        if (parseInt(idade)>50) {
            contIdadeSup50++;
            somaAlturaSup50 += parseFloat(altura);
        }
        i++;      
    } while(parseInt(idade)>0)    
    
    var msg = "Média de altura das pessoas com idade superior a 50 anos: "+(somaAlturaSup50/contIdadeSup50).toFixed(2);
    window.alert(msg);
}