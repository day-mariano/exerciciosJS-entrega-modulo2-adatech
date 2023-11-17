## Exercício 2

Temos a lista de empregados com seus respectivos nomes e salários:

```jsx
const empregados = [
  { nome: 'João', salario: 1200 },
  { nome: 'Maria', salario: 1500 },
  { nome: 'Pedro', salario: 1800 },
  { nome: 'Ana', salario: 1400 },
  { nome: 'Carlos', salario: 2000 }
]
```

Utilize o método `some` para verificar se pelo menos um dos empregados tem salário maior ou igual a R$ 1.500,00.

Utilize o método `some` novamente para verificar se pelo menos um dos empregados tem salário menor ou igual a R$ 1.000,00.

Obs: Pode utilizar o `for` .

### Resposta:

Primeiro eu colei a lista de empregados passada. Depois chamei um `console.log()` o array com método `some()` passando como parametro a `fuction` `isBiggerthan1500` para validar se existe algum empregado com salário maior do que 1500 (retorna booleano `true`). E outro `console.log()` com o método `some()` agora passando `isSmallerthan1000` para verificar se existe algum empregado com o salário menor do que 1000 (retorna booleano `false`).

```jsx
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

```