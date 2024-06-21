let str = 'hoje é 26/02/2018 e amanha será 27/02/18. Meu aniversario é 08/06';

const regex = /(\d{1,2})\//g

// console.log(regex.exec(str))
// console.log(regex.exec(str))
// console.log(regex.exec(str))

let arr = regex.exec(str)

while (arr) {
    console.log(`Encontrei ${arr[0]} na posição ${arr.index}. Próxima busca começa em ${regex.lastIndex}`)
    arr = regex.exec(str)
}

console.log("terminou o loop")
