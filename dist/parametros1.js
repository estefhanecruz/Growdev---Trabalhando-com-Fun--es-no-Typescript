"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Função com o parâmetro do número OBRIGATÓRIO
function saudarVisitante(nome, numero) {
    console.log(`olá, ${nome}, seja bem-vindo!`);
    console.log(`Você é o visitante de número #${numero}`);
}
saudarVisitante("Julia", 3);
//Função com o parâmetro do número opcional
function saudarVisitante1(nome, numero) {
    console.log(`olá, ${nome}, seja bem-vindo!`);
    if (numero != undefined) {
        console.log(`Você é o visitante de número #${numero}`);
    }
}
saudarVisitante1("Murilo");
//# sourceMappingURL=parametros1.js.map