const comando = prompt("informe o comando para a lampada (ligar/desligar)")


const elementoImagem = document.createElement("img")


switch (comando) {
    case "ligar":
        elementoImagem.src = "./assets/ligada.png"
        break;
    case "desligar":
        elementoImagem.src = "./assets/desligada.png"
        break;
    default:
}


if (elementoImagem.src != null) {
    document.body.appendChild(elementoImagem)
}