let imagens = [
    '../img/ToyotaHilux1.png',
    '../img/ToyotaHilux2.png',
    '../img/ToyotaHilux3.png'
]

let imagens2 = [
    '../img/RangerRaptor1.png',
    '../img/RangerRaptor2.png',
    '../img/RangerRaptor3.png'
]

let imagens3 = [
    '../img/VWAmarok3.png',
    '../img/VWAmarok2.png',
    '../img/VWAmarok1.png'
]

let imagens4 = [
    '../img/1ChevroletS10.png',
    '../img/2ChevroletS10.png',
    '../img/3ChevroletS10.png'
]

let imagens5 = [
    '../img/L200Triton_1.png',
    '../img/L200Triton_2.png',
    '../img/L200Triton_3.png'
]

let imagens6 = [
    '../img/NissanFrontier_1.png',
    '../img/NissanFrontier_2.png',
    '../img/NissanFrontier_3.png'
]

let imagens7 = [
    '../img/Ram1500_1.png',
    '../img/Ram1500_2.png',
    '../img/Ram1500_3.png'
]

let indiceAtualListaImagens = 0

function exibirImagem() {
    let imagemCarrosel = document.getElementById('img-carrosel')
    if(imagemCarrosel) imagemCarrosel.src = imagens[indiceAtualListaImagens]

    let imagemCarrosel2 = document.getElementById('img-carrosel2')
    if(imagemCarrosel2) imagemCarrosel2.src = imagens2[indiceAtualListaImagens]

    let imagemCarrosel3 = document.getElementById('img-carrosel3')
    if(imagemCarrosel3) imagemCarrosel3.src = imagens3[indiceAtualListaImagens]

    let imagemCarrosel4 = document.getElementById('img-carrosel4')
    if(imagemCarrosel4) imagemCarrosel4.src = imagens4[indiceAtualListaImagens]

    let imagemCarrosel5 = document.getElementById('img-carrosel5')
    if(imagemCarrosel5) imagemCarrosel5.src = imagens5[indiceAtualListaImagens]

    let imagemCarrosel6 = document.getElementById('img-carrosel6')
    if(imagemCarrosel6) imagemCarrosel6.src = imagens6[indiceAtualListaImagens]

    let imagemCarrosel7 = document.getElementById('img-carrosel7')
    if(imagemCarrosel7) imagemCarrosel7.src = imagens7[indiceAtualListaImagens]
}

exibirImagem()

setInterval(function() {
    indiceAtualListaImagens++

    if (indiceAtualListaImagens > 2) {
        indiceAtualListaImagens = 0
    }

    exibirImagem()

}, 3000);