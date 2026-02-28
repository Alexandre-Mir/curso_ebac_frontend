const alunosDeExemplo = [
  { nome: "João", nota: 7 },
  { nome: "Maria", nota: 5 },
  { nome: "Pedro", nota: 8 },
  { nome: "Ana", nota: 4 },
  { nome: "Carlos", nota: 10 },
  { nome: "Lucas", nota: 6 },
];

function filtrarAprovados(alunos) {
  return alunos.filter((aluno) => aluno.nota >= 6);
}

const alunosAprovados = filtrarAprovados(alunosDeExemplo);

console.log("Alunos com nota maior ou igual a 6:");
console.log(alunosAprovados);
