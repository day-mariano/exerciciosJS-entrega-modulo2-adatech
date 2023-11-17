## Exercício 3

Temos uma lista de pessoas com seus respectivos nomes, alturas e pesos:

```jsx
const pessoas = [
  { nome: 'João', altura: 1.75, peso: 80 },
  { nome: 'Maria', altura: 1.68, peso: 60 },
  { nome: 'Pedro', altura: 1.80, peso: 70 },
  { nome: 'Ana', altura: 1.65, peso: 55 },
  { nome: 'Carlos', altura: 1.90, peso: 100 }
]
```

Crie um função que receba a função a seguir e mostre no console o valor do calculo do IMC da pesso
exemplo: `O IMC é Carlos é 40`
Sendo que o IMC é calculado pela fórmula `peso / altura²`.
Obs: Utilize `for` ou algum método de array.

### Resposta:
Usei o método de array `.forEach()` para em cada valor do `array` pessoas fazer o cálculo do IMC e mostrar no `console`

```jsx
const pessoas = [
  { nome: 'João', altura: 1.75, peso: 80 },
  { nome: 'Maria', altura: 1.68, peso: 60 },
  { nome: 'Pedro', altura: 1.80, peso: 70 },
  { nome: 'Ana', altura: 1.65, peso: 55 },
  { nome: 'Carlos', altura: 1.90, peso: 100 }
]

pessoas.forEach(pessoa => {
  let imc = (pessoa.peso / (pessoa.altura * pessoa.altura))

  console.log("O IMC de " + pessoa.nome + " é " + imc)
  // O IMC de João é 26.122448979591837
  // O IMC de Maria é 21.258503401360546
  // O IMC de Pedro é 21.604938271604937
  // O IMC de Ana é 20.202020202020204
  // O IMC de Carlos é 27.70083102493075
});

```
