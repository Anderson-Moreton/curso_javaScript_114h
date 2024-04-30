const output = document.getElementById("output")

function mostrarTabuada() {
    let msg = ""
    let n = parseFloat(prompt("digite um número"))
    for (let i = 0; i <= 1000; i++) {
        if (i === 11) {
            break
        }
        msg += `${n} x ${i} = ${(n * i)} <br>`
    }
    output.innerHTML = msg
}

function limparTabuada() {
    output.innerHTML = ""
}