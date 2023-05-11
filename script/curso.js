
var id = window.location.href;
var img = document.getElementById("img-curso")
var curso = document.getElementById("curso-h1")

function Pegacurso(){

    if (id.includes("id=1")) {
        img.src = "./IMG/ilustra-poupando.png"
        curso.textContent = 'Investimento para iniciantes'
    } else if (id.includes("id=2")) {
        img.src="./IMG/ilustra-investimento.png"
        curso.textContent = 'Poupando e Rendendo'
    } else {
        img.src="./img/ilustra-independencia.png"
        curso.textContent = 'Independência Financeira'
    }
    
}
Pegacurso()
