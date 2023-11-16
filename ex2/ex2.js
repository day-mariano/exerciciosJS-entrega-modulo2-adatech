// Exercício 2
// Temos a lista de empregados com seus respectivos nomes e salários:
// Utilize o método `some` para verificar se pelo menos um dos empregados tem salário maior ou igual a R$ 1.500,00.
// Utilize o método `some` novamente para verificar se pelo menos um dos empregados tem salário menor ou igual a R$ 1.000,00.
// Obs: Pode utilizar o `for` .

const empregados = [
  { nome: 'João', salario: 1200 },
  { nome: 'Maria', salario: 1500 },
  { nome: 'Pedro', salario: 1800 },
  { nome: 'Ana', salario: 1400 },
  { nome: 'Carlos', salario: 2000 }
]

function isBiggerthan1500(pessoa) {
  return pessoa.salario > 1500
}

function isSmallerthan1000(pessoa) {
  return pessoa.salario < 1000
}

console.log(empregados.some(isBiggerthan1500)) // true

console.log(empregados.some(isSmallerthan1000)) // false