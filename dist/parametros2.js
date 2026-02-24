"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function saudarAlunos(escola, ...alunos) {
    console.log(`Saudações alunos da escola ${escola}`);
    alunos.forEach((aluno) => {
        console.log(aluno);
    });
}
saudarAlunos("Growdev", "Murilo", "Julia ", "Mariana", "Marcia");
function sum(...numbers) {
    let agregador = 0;
    numbers.forEach((n) => (agregador += n));
    return agregador;
}
console.log(sum(1, 2, 8, 4, 6));
const aluno = {
    nome: "Julia",
    turma: "AB",
};
function saudarAluno({ nome, turma }) {
    console.log("Olá, " + nome + ", aluno da turma: " + turma);
}
saudarAluno(aluno);
/*Desconstrução de objeto: A interface Aluno tem dois parâmetros.
A constante aluno é do tipo Aluno.
Na chamada da função saudarAluno, percebemos que a função só aceita um parâmetro,
que é um único objeto do tipo Aluno. A distribuição dos argumentos é feita automaticamente*/
//# sourceMappingURL=parametros2.js.map