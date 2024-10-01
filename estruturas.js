

const Dividendo = Number(prompt("informe o dividendo"))
const Divisor = Number(prompt("informe o divisor"))

console.log(`dividendo ${Dividendo}`)
console.log(`divisor ${Divisor}`)

let resultado = 0

/* Se o valor do divisor for igual a zero, não faz o calculo, se não pode seguir com o calculo */

if (Divisor != 0) {
    resultado = Dividendo / Divisor

} else {
    resultado = 1
}


const mensagem = `A divisão de ${Dividendo} por ${Divisor} é igual a ${resultado} `

const elementMensagem = document.createElement("h1")
elementMensagem.textContent = mensagem
document.body.appendChild(elementMensagem)