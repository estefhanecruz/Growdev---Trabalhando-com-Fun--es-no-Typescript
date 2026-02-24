"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Função com o parâmetro do número OBRIGATÓRIO
function saudarVisitante(nome, numero) {
    console.log(`olá, ${nome}, seja bem-vindo!`);
    console.log(`Você é o visitante de número #${numero}`);
}
//Função com o parâmetro do número opcional
function saudarVisitante1(nome, numero) {
    console.log(`olá, ${nome}, seja bem-vindo!`);
    if (numero != undefined) {
        console.log(`Você é o visitante de número #${numero}`);
    }
    //Se houver um número de visitante, a linha `Você é o visitante de número #${numero}` será executada. Caso contrário, não será
}
saudarVisitante("Julia", 3);
saudarVisitante1("Murilo");
//# sourceMappingURL=parametros1.js.map