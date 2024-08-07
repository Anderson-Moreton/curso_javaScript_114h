const fs = require("fs")
const { getByFlag } = require("./getByFlag")

const dados = require("./dados/dados.json")

const name = getByFlag("--name")
const lastName = getByFlag("--lastName")

const dado = ["name", "lastName"].reduce((current, next) => {
    current[next] = getByFlag("--" + next)
    return current
}, {})

dados.push(dado)

fs.writeFile('./dados/dados.json', JSON.stringify(dados), err => {
    if(err) {
        throw err
    }
})
