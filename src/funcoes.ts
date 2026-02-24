// Função nomeada
function soma(num1: number, num2: number): number {
	return num1 + num2;
}
const resultadoSoma: number = soma(35, 885);
console.log(resultadoSoma);

// Função anônima
let subtrai = function (num1: number, num2: number): number {
	return num1 - num2;
};
const resultadoSubtracao: number = subtrai(56, 23);
console.log(resultadoSubtracao);

// Arrow function
let multiplica = (num1: number, num2: number): number => num1 * num2;
const resultadoMultiplicacao = multiplica(5, 8);
console.log(resultadoMultiplicacao);

//Função sem parâmetro e sem retorno
function saudacao(): void {
	console.log("Olá Mundo");
}
saudacao();
