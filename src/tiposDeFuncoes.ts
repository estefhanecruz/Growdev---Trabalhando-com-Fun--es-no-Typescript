//Definindo tipos de funções
//Reuso de código com Alias de tipo

//Eu defini aqui quais características terão o type calculadora
type calculadora = (num1: number, num2: number) => number;

//A funcSoma é do type calculadora, logo tem que respeitar a assinatura definida nela.
let funcSoma: calculadora = (num1: number, num2: number): number => num1 + num2;

//funcSubtrai também é do tipo calculadora e respeita a mesma assinatura.
let funcSubtrai: calculadora = (num1: number, num2: number): number =>
	num1 - num2;

console.log(funcSoma(6, 8));
console.log(funcSubtrai(16, 8));

//Reuso de código com interfaces. Funciona muito parecido

interface calculator {
	(num1: number, num2: number): number;
}
let funcSomaI: calculator = (num1: number, num2: number): number => num1 + num2;

let funcSubtraiI: calculator = (num1: number, num2: number): number =>
	num1 - num2;

console.log(funcSomaI(6, 8));
console.log(funcSubtraiI(16, 8));
