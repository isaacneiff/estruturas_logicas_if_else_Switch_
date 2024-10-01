//if / if else

const numeroMes = Number(prompt("informe o número do mês"))

// se numeroMes for 1, então mês é janeiro 
// senão, verifica se numeroMes for 2, então mês é fevereiro
// senão, verifica se numeroMes for 3, então mês é março
// senão, verifica se numeroMes for 4, então mês é abril

const agora = new Date();
const horaAtual = agora.toLocaleTimeString()
const diaAtual = agora.toLocaleDateString()

let nomeMes

const ano = 2024

//if / if else

if (numeroMes === 1) {

    nomeMes = "janeiro"
} else if (numeroMes === 2) {

    nomeMes = "fevereiro"

} else if (numeroMes === 3) {

    nomeMes = "março"

} else if (numeroMes === 4) {

    nomeMes = "abril"

} else if (numeroMes === 5) {

    nomeMes = "maio"

} else if (numeroMes === 6) {

    nomeMes = "junho"

} else if (numeroMes === 7) {

    nomeMes = "julho"

} else if (numeroMes === 8) {

    nomeMes = "agosto"

} else if (numeroMes === 9) {

    nomeMes = "setembro"

} else if (numeroMes === 10) {

    nomeMes = "outubro"

} else if (numeroMes === 11) {

    nomeMes = "novembro"

} else if (numeroMes === 12) {

    nomeMes = "dezembro"

} else {

    nomeMes = "invalido"
}

//switch



/*switch (numeroMes) {
    case 1:
        nomeMes = "janeiro"
        break;
    case 2:
        nomeMes = "fevereiro"
        break;
    case 3:
        nomeMes = "março"
        break;
    case 4:
        nomeMes = "abril"
        break;
    case 5:
        nomeMes = "maio"
        break;
    case 6:
        nomeMes = "junho"
        break;
    case 7:
        nomeMes = "julho"
        break;
    case 8:
        nomeMes = "agosto"
        break;
    case 9:
        nomeMes = "setembro"
        break;
    case 10:
        nomeMes = "outubro"
        break;
    case 11:
        nomeMes = "novembro"
        break;
    case 12:
        nomeMes = "dezembro"
        break;
    default:
        break;
}*/





const mensagem = `o mês informado é ${nomeMes}, de ${ano}, horário ${horaAtual}`

const elementMensagem = document.createElement("h1")
elementMensagem.textContent = mensagem
document.body.appendChild(elementMensagem)