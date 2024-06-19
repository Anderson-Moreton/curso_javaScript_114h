const text = document.getElementById("input")
const btn = document.getElementById("btn")

const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
const regexEmail = /^[\w.-]+@[\w.-]+\.[\w]{2,}/

text.addEventListener("input", (e) => {
    const valor = e.target.value
    btn.disabled = !(regexCPF.test(valor) || regexEmail.test(valor))
})