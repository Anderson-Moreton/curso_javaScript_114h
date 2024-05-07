function quantoFaltaPara(m, d) {

    const dataAtual = new Date()
    dataAtual.setHours(0)
    dataAtual.setMinutes(0)
    dataAtual.setSeconds(0)
    dataAtual.setMilliseconds(0)

    let anoAtual = dataAtual.getFullYear()

    const dataNiver = new Date(anoAtual, m - 1, d)

    const dataAtualTS = +dataAtual
    let dataNiverTS = +dataNiver

    if (dataNiverTS < dataAtualTS) {
        dataNiver.setFullYear(++anoAtual)
        dataNiverTS = +dataNiver
    }

    const UM_DIA = 24 * 60 * 60 * 1000
    const diferenca = dataNiverTS - dataAtualTS

    return parseInt(diferenca / UM_DIA)

}

document.getElementById("txtnascimento").addEventListener("change", checkBirthday)

function checkBirthday(e) {
    console.log(e.target.value)
    const container = document.getElementById("quantoFalta")
    const arr = e.target.value.split("-")
    console.log(arr)
    console.log(arr.length)
    if (arr.length > 2) {

        container.innerHTML = `
            <p>Falta(m) ${quantoFaltaPara(arr[1], arr[2])} dias para o seu aniversario</p>
        `
    } else {
                container.textContent = "  "
    }
}
