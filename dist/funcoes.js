"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Função nomeada
function soma(num1, num2) {
    return num1 + num2;
}
const resultadoSoma = soma(35, 885);
console.log(resultadoSoma);
// Função anônima
let subtrai = function (num1, num2) {
    return num1 - num2;
};
const resultadoSubtracao = subtrai(56, 23);
console.log(resultadoSubtracao);
// Arrow function
let multiplica = (num1, num2) => num1 * num2;
const resultadoMultiplicacao = multiplica(5, 8);
console.log(resultadoMultiplicacao);
//Função sem parâmetro e sem retorno
function saudacao() {
    console.log("Olá Mundo");
}
saudacao();
//# sourceMappingURL=funcoes.js.map