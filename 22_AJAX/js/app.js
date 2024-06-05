const xhr = new XMLHttpRequest()

xhr.open("GET", "dados.json")
xhr.send(null)

xhr.onreadystatechange = verificaAjax

function verificaAjax() {
    if (xhr.readyState === 4) {
        if (xhr.status === 200 || xhr.status === 304) {
            const json = JSON.parse(xhr.responseText)
            console.log(json)
            console.log(json[0].nome)

            mostrarDados(json)
        } else {
            alert("algo deu errado com o servidor: " + xhr.status)
        }
    }
}

function mostrarDados(dados) {

}