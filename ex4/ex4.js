//  Exercício 4
// Temos a lista de alunos com suas notas:
// Utilize o método `map` para criar um novo objeto com o nome e a média de cada aluno.
// A média deve ser calculada utilizando o método `reduce` para somar as notas e dividi-las pelo número de notas.
// Obs: Utilize `for` ou algum método de array.

const alunos = [
  { nome: 'Ana', notas: [7, 8, 9] },
  { nome: 'Pedro', notas: [5, 6, 7] },
  { nome: 'Maria', notas: [9, 8, 10] },
  { nome: 'João', notas: [6, 7, 8] },
  { nome: 'Lucas', notas: [8, 9, 7] },
  { nome: 'Julia', notas: [10, 8, 9] }
]

let alunosEMedias = alunos.map((aluno) => {
  let soma = aluno.notas.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual, 0)
  let media = soma / aluno.notas.length
  let objetoAluno = {
    Nome: aluno.nome,
    Média: media,
  }
  return objetoAluno
})

console.log(alunosEMedias)

// 0: {Nome: 'Ana', média: 8}
// 1: {Nome: 'Pedro', média: 6}
// 2: {Nome: 'Maria', média: 9}
// 3: {Nome: 'João', média: 7}
// 4: {Nome: 'Lucas', média: 8}
// 5: {Nome: 'Julia', média: 9}
