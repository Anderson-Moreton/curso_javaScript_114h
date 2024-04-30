// declaracao de funcao
function ola() {
    document.write("ola mundo")
}

ola()

//expressao de funcao
const ola2 = function () {
    console.log("ola mundo de function expression")
}
ola2()

// arrow functions
const ola3 = () => {
    console.log("ola mundo de arrow functions")
}
ola3()

// retorno de valores
function obtemDiaSemana() {
    if(new Date().getDay() === 1) {
        console.log("Hoje é segunda-feira.");
    } else if(new Date().getDay()  === 2) {
        console.log("Hoje é terça-feira.");
    } else if(new Date().getDay()  === 3) {
        console.log("Hoje é quarta-feira.");
    } else if(new Date().getDay()  === 4) {
        console.log("Hoje é quinta-feira.");
    } else if(new Date().getDay() === 5) {
        console.log("Hoje é sexta-feira");
    } else if(new Date().getDay()  === 6) {
        console.log("Hoje é sábado.");
    } else {
        console.log("Hoje é domingo.")
    }
    return new Date().getDay()
    console.log("O que for inserido abaixo do return, não será apresentado.")
}

console.log("Agora sim é apresentado, esta fora do bloco da função.")

console.log(obtemDiaSemana())


function somar(n1 = 0, n2 = 0) {
    // let _n1 = n1 || 0
    // let _n2 = n2 || 0
    return n1 + n2
}
let soma = somar(3, 5, 8)
console.log(soma)

console.log(somar(10))
console.log(somar())
