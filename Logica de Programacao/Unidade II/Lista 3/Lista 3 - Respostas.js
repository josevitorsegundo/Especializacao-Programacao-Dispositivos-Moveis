function questao1 (){    
    var conteudo = window.prompt("Digite algum texto: ");            
    
    var msg = "A quantidade de caracteres no texto considerando espaços em branco: "+conteudo.length;
        msg += "\nA quantidade de caracteres no texto desconsiderando espaços em branco: "+conteudo.split(" ").join("").length;
    
    window.alert(msg);
}

function questao2 (){    
    var str = "Ifpi"
    
    var msg = str.charAt(0);
        msg +="\n"+(str.charAt(0)+str.charAt(1))
        msg +="\n"+(str.charAt(0)+str.charAt(1))
        msg +="\n"+(str.charAt(0)+str.charAt(1)+ str.charAt(2))
        msg +="\n"+(str.charAt(0)+str.charAt(1)+ str.charAt(2)+ str.charAt(3))
        msg +="\n"+(str.charAt(0)+str.charAt(1)+ str.charAt(2))
        msg +="\n"+(str.charAt(0)+str.charAt(1))
        msg +="\n"+(str.charAt(0))
    
    console.log(msg)
    window.alert(msg);
}

function questao3 (){    
    var msg = ""
    
    var letrasMaiusc = window.prompt("Digite o texto em letras maisculas: ");
    msg = letrasMaiusc.toLowerCase();
    window.alert(msg);
    
    var letrasMinusc = window.prompt("Digite o texto em letras minúsculas: ");
    msg = letrasMinusc. toUpperCase();
    window.alert(msg);
}

function questao4 (){    
    var str = "Ifpi"
    
    var msg = str.substr(0, 1);
        msg +="\n"+(str.substr(0, 2))
        msg +="\n"+(str.substr(0, 3))
        msg +="\n"+(str.substr(0, 4))
        msg +="\n"+(str.substr(0, 3))
        msg +="\n"+(str.substr(0, 2))
        msg +="\n"+(str.substr(0, 1))
    
    console.log(msg)
    window.alert(msg);
}

function questao5 (){    
    var str = window.prompt("Digite algum texto: ");
    var palavra1 = window.prompt("Digite a palavra a ser substituída do texto: "+"\n"+str);
    var palavra2 = window.prompt("Digite a nova palavra a ser colocada no lugar de "+palavra1+" no texto: \n"+str);
    
    var msg = "Novo texto: \n"+str.replace(palavra1, palavra2);

    console.log(msg)
    window.alert(msg);
}

function questao6 (){    
    var str = window.prompt("Digite o código: ");
    var msg = str
    
    msg = msg.replaceAll("12", "m");
    msg = msg.replaceAll("14", "o");
    msg = msg.replaceAll("15", "p");
    msg = msg.replaceAll("17", "r");
    msg = msg.replaceAll("19", "t");
    msg = msg.replaceAll("20", "u");
    msg = msg.replaceAll("1", "a");
    msg = msg.replaceAll("3", "c");
    msg = msg.replaceAll("4", "d");

    msg = "Texto do código: \n"+msg;

    console.log(msg)
    window.alert(msg);
}

function questao7 (){    
    var str = window.prompt("Digite o código: ");
    var msg = str
    
    msg = msg.replaceAll("0", "zero, ");
    msg = msg.replaceAll("1", "um, ");
    msg = msg.replaceAll("2", "dois, ");
    msg = msg.replaceAll("3", "três, ");
    msg = msg.replaceAll("4", "quatro, ");
    msg = msg.replaceAll("5", "cinco, ");
    msg = msg.replaceAll("6", "seis, ");
    msg = msg.replaceAll("7", "sete, ");
    msg = msg.replaceAll("8", "oito, ");
    msg = msg.replaceAll("9", "nove, ");

    msg = msg.slice(0,-2);

    msg = "Texto em extenso do número "+str+" : \n"+msg;

    console.log(msg)
    window.alert(msg);
}

function questao8 (){    
    var conteudo = window.prompt("Digite algum texto: ");       
    var arrayConteudo = conteudo.split(" ");
    
    var msg = "A quantidade de caracteres no texto considerando espaços em branco: "+conteudo.length;
        msg += "\nA quantidade de caracteres no texto desconsiderando espaços em branco: "+conteudo.split(" ").join("").length;
        msg += "\nA quantidade de palavras no texto: "+arrayConteudo.length;
    
    window.alert(msg);
}

function questao9 (){    
    var conteudo = window.prompt("Digite o nome completo: ");       
    var arrayConteudo = conteudo.split(" ");
    
    var msg = "Sobrenome: "+arrayConteudo.slice(-1);
        
    
    window.alert(msg);
}

function questao10 (){    
    var conteudo = window.prompt("Digite uma frase: ");       
    var qtde = 0;
    
    [...conteudo].forEach(letra => {
        if (letra==" "){
            qtde ++;
        }
    }); 
    
    var msg = "Quantidade de espaços em brancos: "+qtde;    
    window.alert(msg);
}