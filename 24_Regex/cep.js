const regex = /^\d{5}-\d{3}$/

const elfocus = (e) => console.log("focus")
const elblur = (e) => {
    const cep = e.target.value
    console.log(isCEPValid(cep))
}

const el = document.getElementById("cep")
el.addEventListener("focus", elfocus)
el.addEventListener("blur", elblur)



const isCEPValid = cep => regex.test(cep)