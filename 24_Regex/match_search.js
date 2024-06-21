let str = 'hoje é 26/02/2018 e amanha será 27/02/18. Meu aniversario é 08/06';

const regex = /(\d{1,2})\//
const regexGlobal = /(\d{1,2})\//g

console.log(str.search(regexGlobal))

console.log(str.match(regexGlobal))
