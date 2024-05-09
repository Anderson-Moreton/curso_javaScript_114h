let teste = "variavel de introducao.html"

function teste2() {
    console.log("teste2 chamado")
}

console.log(opener)

document.querySelector("button").addEventListener("click", function () {
    window.open("history.html", "nome-janela", "width=600,height=300")
})

window.addEventListener("load", function () {
    console.log("load")
})

window.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded")
})

window.addEventListener("resize", function () {
    console.log("resize", innerWidth, innerHeight)
})

window.addEventListener("scroll", function () {
    console.log("scroll", pageYOffset)
})

window.addEventListener("unload", function () {
    console.log("unload")
    debugger
    alert("unload")
})

window.addEventListener("beforeunload", function () {
    console.log("beforeunload")
    debugger
    alert("beforeunload")
})