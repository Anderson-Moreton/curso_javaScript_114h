function add2(x: number, y?: number) {
    if(y === undefined) {
        return null
    }
    return x + y
}

const teste2 = add2(10)

type testAlias = number | string | boolean 

let teste3: testAlias
teste3 = 10
teste3 = "teste 3"
teste3 = true

type User = {
    nome: string,
    idade?: number
}

const anderson: User = {
    nome: "Anderson",
    idade: 36
}

const priscila: User = {
    nome: "Priscila",
    idade: 35
}

export default 1