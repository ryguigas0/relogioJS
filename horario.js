var hora = new Date().getHours()
var imagem = document.getElementById("img")

function load(){
    var div = document.getElementById("horario")
    div.innerText = `Agora são ${hora} hora(s).`
    if(hora >= 5 && hora < 12){
        div.innerText += " Bom dia!"
        imagem.src = "manha.jpg"
        document.body.style.background = "#F3DB95"
    }else if(hora >= 12 && hora < 18){
        div.innerText += " Boa tarde!"
        imagem.src = "tarde.jpg"
        document.body.style.background = "#FC7C03"
    }else {
        div.innerText += " Boa noite!"
        imagem.src = "noite.jpg"
        document.body.style.background = "#060621"
        document.body.style.color = "white"
    }
}
