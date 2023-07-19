const prompt = require("prompt-sync")();
function questao1 (){    
    var notas = []
    for (var i=0; i<10; i++){
         var nota = prompt("Digite a nota do aluno "+(i+1)+" : ");   
         notas.push(nota)
    }
    
    console.log("Notas Maiores que 5:");

    for (var i=0; i<10; i++){
         if (notas[i]>5){
            console.log(notas[i])
         }
    }
}

function questao2 (){    
   var alunos = [], notas = []
    for (var i=0; i<5; i++){
         var aluno = prompt("Digite o nome do aluno "+(i+1)+" : "); 
         var nota = prompt("Digite a nota do aluno - "+aluno+" : ");   
         alunos.push(aluno);
         notas.push(nota);
    }
    
    console.log("Alunos de notas Maiores que 5:");

    for (var i=0; i<5; i++){
         if (notas[i]>5){
            console.log(alunos[i])
         }
    }
}

function questao3 (){    
    var alunos = [], notas1 = [], notas2 = []
    for (var i=0; i<5; i++){
         var aluno = prompt("Digite o nome do aluno "+(i+1)+" : "); 
         var nota1 = prompt("Digite a primeira nota do aluno - "+aluno+" : ");   
         var nota2 = prompt("Digite a segunda nota do aluno - "+aluno+" : ");  
         alunos.push(aluno);
         notas1.push(parseFloat(nota1));
         notas2.push(parseFloat(nota2));
    }
    
    console.log("\nRelatório Geral de Notas:\n");

    for (var i=0; i<5; i++){
        console.log(alunos[i]+ " - Nota 1: "+notas1[i]+ " - Nota 2: "+notas2[i]+ " - Média: "+(notas1[i]+notas2[i])/2)
    }
}

function questao4 (){    
    const TAM = 80
    var notas = [], somaNotas = 0

    for (var i=0; i<TAM; i++){
         var nota = prompt("Digite a nota do aluno "+(i+1)+" : ");   
         somaNotas += parseFloat(nota)
         notas.push(parseFloat(nota))
    }

    console.log("\nNotas dos Alunos:\n");
    for (var i=0; i<TAM; i++){
        console.log(notas[i])
    }
    console.log("\nMédia da Turma: "+(somaNotas/TAM))
}

function questao5 (){    
    var num = []
    for (var i=0; i<3; i++){
         var numero = prompt("Digite algum número: ");   
         num.push(numero)
    }
    
    console.log("\nArray Invertido:\n");

    for (var i=3; i>0; i--){
        console.log(num[i-1])
    }
}

function questao6 (){    
    var num = []
    
    const TAM = prompt("Digite quantos valores serão digitados: "); 

    for (var i=0; i<TAM; i++){
         var numero = prompt("Digite algum número: ");   
         num.push(numero)
    }
    
    console.log("\nArray:\n");
    for (var i=0; i<TAM; i++){
        console.log(num[i])
    }

    console.log("\nArray Invertido:\n");
    for (var i=TAM; i>0; i--){
        console.log(num[i-1])
    }
}

function questao7 (){    
    var num = []
    const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

    const TAM = prompt("Digite quantos valores serão digitados: "); 

    for (var i=0; i<TAM; i++){
         var numero = parseFloat(prompt("Digite algum número: "));   
         num.push(numero)
    }
    
    var numeroBusca = parseFloat(prompt("Digite o número a ser localizado: "));   

    var arrayIndicesLocalizados = indexOfAll(num, numeroBusca);


    if(arrayIndicesLocalizados.length == 0) {
        console.log("Elemento da busca não encontrado no Array");
    } else {
        console.log("\nPosições Array:\n");
        for (var i=0; i<arrayIndicesLocalizados.length; i++){
            console.log("Posição: "+arrayIndicesLocalizados[i])
        }
    }

    
    
}

function questao8 (){    
    var num = []

    const TAM = prompt("Digite quantos valores serão digitados: "); 

    for (var i=0; i<TAM; i++){
         var numero = parseFloat(prompt("Digite algum número: "));   
         num.push(numero)
    }
   
    const found2 = num.findIndex(element => element < 0);
    if (found2==-1) {
        console.log("Nenhum valor negativo encontrado");
    }
    else {
      console.log("\nPosição do primeiro elemento negativo encontrado no Array: "+found2);
    }
}