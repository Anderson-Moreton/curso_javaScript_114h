let str = 'hoje é 26/02/2018 e amanha será 27/02/18. Meu aniversario é 1/01';
const meses = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

const regex = /(\d{1,2})\/(\d{1,2})(?:\/(\d{2,4}))?/g

str = str.replace(regex, function (a, dia, mes, ano, e, f) {
    return `${dia} de ${meses[parseInt(mes) - 1]} ${(ano) ? `de ${ano}` : ``}`
})

console.log(str)