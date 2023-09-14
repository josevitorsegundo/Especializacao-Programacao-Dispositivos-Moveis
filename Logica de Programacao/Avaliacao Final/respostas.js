//Questão 1
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
 
var op = parseInt(lines) *2;
console.log(op+" minutos");

//Questão 2
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var diasTotal = parseInt(lines);

var ano = parseInt(diasTotal/365);
var meses = parseInt((diasTotal - ano*365)/30);
var dias = parseInt((diasTotal - ano*365 - meses*30));


console.log(ano+" ano(s)");
console.log(meses+" mes(es)");
console.log(dias+" dia(s)");

//Questão 3
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var num;

for (var i = 0; i< 100; i++){
    num = parseFloat(lines.shift());
    if(num<=10) {
     console.log("A["+i+"] = "+(num.toFixed(1)));   
    }
}

//Questão 4
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var quant = parseInt(lines.shift());
var str
var num1, num2, div;

for (var i = 0; i< quant; i++){
    str = lines.shift();
    num1 = parseInt(str.split(" ")[0]);
    num2 = parseInt(str.split(" ")[1]);
    
    if (num2 == 0) {
        console.log("divisao impossivel");
    } else {
        div = parseFloat(num1/num2);
        console.log(div.toFixed(1));
    }
}

//Questão 5
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var quant = parseInt(lines.shift());
var str = "";
var op1, op2;

for (var i = 0; i< quant; i++){
    op1 = lines.shift();
    op2 = lines.shift();
    
    if (op1 == "ataque" &&  op2 == "ataque") {
        str = "Aniquilacao mutua";
    } else if(op1=="pedra" && op2 == "pedra") {
        str = "Sem ganhador";
    } else if(op1=="papel" && op2 == "papel") {
        str = "Ambos venceram";
    } else if((op1=="papel" && op2 == "ataque") || (op1=="ataque" && op2 == "papel")) {
        if (op1 == "ataque") {
            str = "Jogador 1 venceu"
        } else {
            str = "Jogador 2 venceu"
        }
    } else if((op1=="pedra" && op2 == "papel") || (op1=="papel" && op2 == "pedra")) {
        if (op1 == "pedra") {
            str = "Jogador 1 venceu"
        } else {
            str = "Jogador 2 venceu"
        }
    }  else if((op1=="ataque" && op2 == "pedra") || (op1=="pedra" && op2 == "ataque")) {
        if (op1 == "ataque") {
            str = "Jogador 1 venceu"
        } else {
            str = "Jogador 2 venceu"
        }
    }
    
    console.log(str)
}

//Questão6
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var quant = parseInt(lines.shift());
var str = "", id = "";
var op1 = 0, op2 = 0, op3=0, op4=0, op5=0;

for (var i = 0; i< quant; i++){
    str = lines.shift();
    id = str.slice(-1);
    
    if (id == "A") {
       op4++;
    } else if(id=="E") {
        op3++;
    } else if(id=="H") {
        op2 ++;
    } else if(id== "M") {
        op5++;
    } else if(id=="X") {
        op1++;
    } 
}

console.log(op1 + " Hobbit(s)");
console.log(op2 + " Humano(s)");
console.log(op3 + " Elfo(s)");
console.log(op4 + " Anao(oes)");
console.log(op5 + " Mago(s)");

//Questão7
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var quant = parseInt(lines.shift());
var str
var num1, num2, op;
var musics = ["PROXYCITY", "P.Y.N.G.", "DNSUEY!","SERVERS","HOST!","CRIPTONIZE","OFFLINE DAY","SALT","ANSWER!","RAR?","WIFI ANTENNAS"]

for (var i = 0; i< quant; i++){
    str = lines.shift();
    num1 = parseInt(str.split(" ")[0]);
    num2 = parseInt(str.split(" ")[1]);
    op = parseInt(num1 + num2);
    
    console.log(musics[op])
}