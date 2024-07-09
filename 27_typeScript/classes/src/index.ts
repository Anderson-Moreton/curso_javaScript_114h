console.log("Olá Mundo")

// Mais Longa
// class Animal {
//     categoria: string
//     constructor(categoria: string) {
//         this.categoria = categoria
//     }
// }

// Mais Curta
class Animal {
    constructor(protected categoria: string) { }

    mostrarCategoria(): void{
        console.log(`A categoria é: ${this.categoria}`)
    }
}

class Gato extends Animal {
    private nome: string
    constructor(nome: string) {
        super("Mamífero")
        this.nome = nome
    }

    mostrarDetalhes(): void {
        console.log(this.nome, this.categoria)
    } 
}

const animal = new Animal("Mamífero")

console.log(animal)
animal.mostrarCategoria()
// animal.categoria = "Categoria editada por clasee"
console.log(animal)

const mingal = new Gato("Mingal")
console.log(mingal)
// mingal.nome = "Nome Alterado"
console.log(mingal)