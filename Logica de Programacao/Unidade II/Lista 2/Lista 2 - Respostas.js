//https://www.npmjs.com/package/prompt-sync
const prompt = require('prompt-sync')()

function questao1 (){
    const nota1 = Number(prompt("Digite a primeira nota:"));
    const nota2 = Number(prompt("Digite a segunda nota:"));
    const nota3 = Number(prompt("Digite a terceira nota:"));
    const nota4 = Number(prompt("Digite a quarta nota:"));

    let msg = "";
    let media = (nota1+nota2+nota3+nota4)/4
    const situacao = media<7?"Reprovado":"Aprovado"
    msg = "Média: "+media+" . A situação é: "+situacao
    console.log(msg);
    //window.alert(msg);
} 

function questao2 (){
    const num = Number(prompt("Digite o número:"));
    let msg = "";

    const mult = num%3
    if(mult==0){
        msg = "O número: "+num+" é múltiplo de 3."
    } else {
        msg = "O número: "+num+" não é múltiplo de 3."
    }    
    console.log(msg);
    //window.alert(msg);
} 

function questao3 () {
    const num1 = Number(prompt("Digite o primeiro número:"));
    const num2 = Number(prompt("Digite o segundo número:"));

    let msg = "";

    if (num1<=num2) {
        msg = "O menor número é "+num1
    } else if (num2 <= num1){
        msg = "O menor número "+num2
    } 
    console.log(msg);
    //window.alert(msg);
}

function questao4 () {
    const num1 = Number(prompt("Digite o primeiro número:"));
    const num2 = Number(prompt("Digite o segundo número:"));
    const num3 = Number(prompt("Digite o terceiro número:"));

    let msg = "";

    if (num1>=num2 && num1>=num3) {
        msg = "O maior número é "+num1
    } else if (num2>=num1 && num2 >= num3) {
        msg = "O maior número é "+num2
    } else if (num3>=num1 && num3 >= num2) {
        msg = "O maior número é "+num3
    } else  {
        msg = "Os número são iguais cujo valor é "+num1
    }    
    console.log(msg);
    //window.alert(msg);
}

function questao5 (){
    const num1 = Number(prompt("Digite o primeiro número:"));
    const num2 = Number(prompt("Digite o segundo número:"));

    let op = prompt("Digite a operação deseja de 1 a 4.\n1-Média\n2-Diferença\n3-Produto\n4-Divisão\n--> ");
    let desc = "";
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
    //window.alert(desc);
}

function questao6 (){
    const num = Number(prompt("Digite um número: "));
    let msg = "";

    for (var i = 1; i<= 10; i++){
        msg += num+" x "+i+" = "+ (num*i);
        msg += "\n"
    }

    console.log(msg);
    //window.alert(msg);
}

function questao7 (){
    let i =0;
    do {
        const op = Number(prompt("Digite um número: "));
        console.log("O quadrado de: "+op+" é igual a: "+op*op);
        //window.alert("O quadrado de: "+op+" é igual a: "+op*op);
        i++;
    } while(i<5)    
}

function questao8 (){
    let i =0 
    let contIdadeSup50=0, contIdade10a20=0, contPesoAbaixo40=0;
    let somaAltura10a20=0;
    const qtde = Number(prompt("Digite quantas pessoas serão analisadas: "));

    do {
        var idade = Number(prompt((i+1)+" - Digite a idade: "));
        var altura = Number(prompt((i+1)+" - Digite a altura: "));
        var peso = Number(prompt((i+1)+" - Digite o peso: "));
        
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
    
    let msg = "Quantidade de pessoas superior a 50 anos: "+contIdadeSup50;
    msg += "\nMédia de altura das pessoas entre 10 e 20 anos: "+(somaAltura10a20/contIdade10a20).toFixed(2);
    msg += "\nPercentual de pessoas com peso abaixo de 40 quilos: "+((contPesoAbaixo40/qtde) * 100).toFixed(2)+"%"
    console.log(msg);
    //window.alert(msg);
}

function questao9 (){
    let i = 0 
    let somaPar = 0, somaImpar = 0; 
    let num

    do {
        num = Number(prompt((i+1)+" - Digite o número: "));        
        
        if (parseFloat(num)%2==0) {
            somaPar += parseFloat(num);
        }
        else {
            somaImpar += parseFloat(num);
        }   
        i++;
    } while(i<10)    
    
    let msg = "Soma pares: "+somaPar;
    msg += "\nSoma impares: "+somaImpar;  
    console.log(msg);
    //window.alert(msg);
}

function questao10 (){
    let i= 0;
    let contIdadeSup50=0, somaAlturaSup50=0;
    let idade, altura

    do {
        idade = Number(prompt((i+1)+" - Digite a idade (Digite algum número menor ou igual a 0 para encerrar): "));
        if(parseInt(idade)>0) {            
            altura = Number(prompt((i+1)+" - Digite a altura: "));        
        }
        
        if (parseInt(idade)>50) {
            contIdadeSup50++;
            somaAlturaSup50 += altura;
        }
        i++;      
    } while(parseInt(idade)>0)    
    
    let msg = "Média de altura das pessoas com idade superior a 50 anos: "+(somaAlturaSup50/contIdadeSup50).toFixed(2);
    console.log(msg);
    //window.alert(msg);
}