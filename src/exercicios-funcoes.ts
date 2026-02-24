/*Você recebeu um código em Javascript simples no arquivo "codigo-para-refatorar.js".
Sua tarefa é refatorá-lo para Typescript, garantindo que todos os tipos sejam explicitamente definidos.
- Defina os tipos de parâmetro e retorno das funções (string, number, boolean...).
- Faça três tipos de refatoração da função:
    - Função nomeada
    - Função anônima
    - Função de flecha
- Teste o código para verificar se o comportamento esperado das funções é mantido. */

//Código:
/*function saudarVisitante(nome)
    console.log(`Olá, ${nome}! seja bem-vindo!`)*/

//Função nomedada
function saudarVisitante(nome: string): string {
	return `Olá ${nome}! Seja bem-vindo!`;
}

//Função anônima
let saudarVisitante1 = function (nome: string): string {
	return `Olá ${nome}! Seja bem-vindo!`;
};

//Arrow function
let saudarVisitante2 = (nome: string): string => `Olá ${nome}! Seja bem-vindo!`;

console.log(saudarVisitante("Julia"));
console.log(saudarVisitante1("Julia"));
console.log(saudarVisitante2("Julia"));
