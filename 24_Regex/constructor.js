let str = 'hoje é meu dia preferido 26/02/2018. Meu é 1 de jan';

let strRegex = "meu"
// const regex = new RegExp(strRegex, "gi")
const regex = new RegExp("\\w", "gi")

console.log(regex.lastIndex)
console.log(regex.exec(str))
console.log(regex.lastIndex)
console.log(regex.exec(str))
