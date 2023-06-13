function questao1 (x){
    var sucessor = x+1
    var antecessor = x-1
    console.log("Do número: "+x+".O antecessor é: "+antecessor+" e o sucessor é: "+sucessor+".")
} 

function questao2 (x,y){
    var media = (x+y)/2
    console.log("A média é : "+media)
} 

function questao3 (x,y){
	var area = (x*y)/2
	console.log("A área do triângulo é : "+area)
} 

function questao4 (valorHoraAula,quantAulas, descINSS){
	var salarioLiq = (valorHoraAula*quantAulas)*(1- (descINSS/100))
	console.log("Valor Sálario Bruto: "+(valorHoraAula*quantAulas)+".O valor do Salário Liquido é : "+salarioLiq)
}

function questao5 (peso, altura){
	var imc = (peso)/(altura*altura)
	console.log("Valor do IMC: "+imc)
}

function questao6 (valor, taxa, tempo){
	var prestacao = valor+ ((valor)*(taxa/100)*(tempo))
	console.log("Valor da prestação: "+prestacao)
} 

function questao7 (A, B){
	var auxB = B, auxA = A    
    B = A
    A = auxB
    
	console.log("Valores de entrada: A ->  "+auxA+ " ; B -> "+auxB);
    console.log("Valores trocados: A->  "+A+" ; B -> "+B);
}

function questao8 (raio, altura){
	var volume = 3.14 * (raio * raio) * altura    
	console.log("Volume ->  "+volume);             
}

function questao9 (valor){
	var novoValor = valor*0.88    
	console.log("Valor com desconto->  "+novoValor);             
}

function questao10 (valor){
    var valorString = valor.toString()
    var primeiroNumero = valorString[0]
    var ultimoNumero = valorString[valorString.length-1]    
    console.log("primeiro numero->  "+primeiroNumero);    
    console.log("ultimo numero->  "+ultimoNumero);             
}