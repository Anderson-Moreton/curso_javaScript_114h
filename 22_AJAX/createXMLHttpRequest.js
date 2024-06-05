function createXMLHttpRequest(method, url, cb, data = null) {
    const xhr = new XMLHttpRequest()

    xhr.open(method, url)
    xhr.send(data)

    xhr.onreadystatechange = verificaAjax

    function verificaAjax() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 304) {
                const json = JSON.parse(xhr.responseText)

                if (typeof cb === "function") {
                    cb(json)
                }

            } else if (typeof cb === "function") {
                cb({
                    status: xhr.status,
                    message: "algo deu errado com a conexão"
                })

            }
        }
    }
}

createXMLHttpRequest("GET", "dados.json", mostrarUsuarios)
console.log("antes da função mostrarUsuarios()")
function mostrarUsuarios(data) {
            console.log(data)
}
console.log("depois da função mostrarUsuarios()")