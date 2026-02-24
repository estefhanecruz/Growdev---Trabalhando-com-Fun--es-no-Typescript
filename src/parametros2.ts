function saudarAlunos(escola: string, ...alunos: string[]): void {
	console.log(`Saudações alunos da escola ${escola}`);
	alunos.forEach((aluno) => {
		console.log(aluno);
	});
}
saudarAlunos("Growdev", "Murilo", "Julia ", "Mariana", "Marcia");

function sum(...numbers: number[]): number {
	let agregador: number = 0;
	numbers.forEach((n) => (agregador += n));
	return agregador;
}
console.log(sum(1, 2, 8, 4, 6));

//Usando interfaces

interface Aluno {
	nome: string;
	turma: string;
}

const aluno: Aluno = {
	nome: "Julia",
	turma: "AB",
};

function saudarAluno({ nome, turma }: Aluno): void {
	console.log("Olá, " + nome + ", aluno da turma: " + turma);
}
saudarAluno(aluno);
/*Desconstrução de objeto: A interface Aluno tem dois parâmetros.
A constante aluno é do tipo Aluno.
Na chamada da função saudarAluno, percebemos que a função só aceita um parâmetro,
que é um único objeto do tipo Aluno. A distribuição dos argumentos é feita automaticamente*/
