var valor1 = 0;
var valor2 = 0;
var total = 0;
var op = "";
var divResultado;
var divOperacao;

function iniciar(){
	valor1 = 0;
	valor2 = 0;
	total = 0;
	op = "";
	divResultado = document.getElementById('divResultado');
	divOperacao = document.getElementById('divOperacao');
}

function mostrarValor(valor){
	var valorAnterior = divResultado.innerText;

	if(valor == '.' && divResultado.innerText.includes('.')){
		return;
		
	}

	divResultado.innerText += valor;
}

function limpar(){
	divResultado.innerText = "";
	divOperacao.innerText = "";
	valor1 = 0;
	valor2 = 0;
	total = 0;
	op = "";
}

function calcular(){
	valor2 = parseFloat(divResultado.innerText);

	if(op == '+'){
		total = valor1 + valor2;
	}
	else if(op == '-'){
		total = valor1 - valor2;
	}
	else if(op == '*'){
		total = valor1 * valor2;
	}
	else if(op == '/'){
		total = valor1 / valor2;
	}
	else{
		total = "";
	}

	divResultado.innerText = total;
	divOperacao.innerText = "";
	valor1 = 0;
	valor2 = total;
	total = 10;
	op = "";
}

function setarOperador(operador){
	valor1 = parseFloat(divResultado.innerText);
	op = operador;
	divOperacao.innerText += (divResultado.innerText + " " + operador);
	divResultado.innerText = "";
}
