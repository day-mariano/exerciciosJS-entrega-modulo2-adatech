// ## Exercício 1
// Crie uma função que receba como parâmetro a lista de hotifrutis abaixo que tem três tipos: `frutas`, `legumes` e `verduras`, faça com que essa função retorne o número de itens de cada um desses tipos.
// Sendo que:
// fruta → banana, maçã, abacaxi, melancia, laranja, limão.
// legume → cenoura, batata, brócolis, abóbora, tomate, alho-poró.
// verdura → alface, espinafre, rúcula, couve, agrião, acelga.

const hortifrutis = ['banana', 'agrião', 'maçã', 'abacaxi', 'melancia', 'laranja', 'limão','cenoura', 'melancia', 'batata', 'brócolis', 'abóbora', 'tomate', 'alho-poró', 'alface', 'espinafre', 'rúcula', 'couve', 'acelga', 'maçã', 'batata' ];

let frutas = ['banana', 'maçã', 'abacaxi', 'melancia', 'laranja', 'limão'];
let legumes = ['cenoura', 'batata', 'brócolis', 'abóbora', 'tomate', 'alho-poró'];
let verduras = ['alface', 'espinafre', 'rúcula', 'couve', 'agrião', 'acelga'];

function contarHortifrutis (hortifrutis) {
  let quantidadeFruta = 0
  let quantidadeLegume = 0
  let quantidadeVerdura = 0

  for (const item of hortifrutis) {
    
    if (frutas.includes(item)){
      quantidadeFruta++
    } else if (legumes.includes(item)){
      quantidadeLegume++
    } else if (verduras.includes(item)){
      quantidadeVerdura++
    }
  }

  return {quantidadeFruta, quantidadeLegume, quantidadeVerdura}
}

console.log(contarHortifrutis(hortifrutis))
