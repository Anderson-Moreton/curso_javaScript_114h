let numero = prompt("Digite um número")

let indice = 0
while (indice <= 10) {
    indice++
    if (indice === 5) {
        continue
}

document.write(`${numero} x ${indice} = ${(indice * numero)} <br>`)
}
document.write("saiu do loop while<br>")

indice = 0
do {
if (indice > 10) {
alert("indice maior que 10")
break
}
document.write(`${numero} x ${indice} = ${(indice * numero)} <br>`)
indice++
} while (indice <= 10)

document.write("saiu do loop do while<br>")

for (let j = 0; j <= 10; j++) {
if (j === 5) {
continue
}
document.write(`${numero} x ${j} = ${(j * numero)} <br>`)
}
document.write("saiu do loop for")