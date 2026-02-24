"use strict";
/*
Refatorando Javascript para Typescript
Você recebeu um código JS simples no arquivo "codigo-para-refatorar.js".
Sua tarefa é refatorá-lo para TS, garantindo que todos os tipos sejam explicitamente definidos.
- Defina os tipos de parâmetro e retorno das funções (string, number, boolean...)
- Teste o código para verificar se o comportamento esperado das funções é mantido.

function soma (num1, num2) {
    return num1 + num2
}

function concatena (text1, text2) {
    return text1 + text2
}

function saudarVisitante(nome) {
    console.log(`Olá ${nome}! Seja bem-vindo!`);
} */
Object.defineProperty(exports, "__esModule", { value: true });
function soma(num1, num2) {
    return num1 + num2;
}
function concatena(text1, text2) {
    return text1 + text2;
}
function saudarVisitante(nome) {
    console.log(`Olá ${nome}! Seja bem-vindo!`);
}
console.log(soma(4, 6));
console.log(concatena("Julia", "Melo"));
saudarVisitante("Maria");
//# sourceMappingURL=exercicios-parametros.js.map