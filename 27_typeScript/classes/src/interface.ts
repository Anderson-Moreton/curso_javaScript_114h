export abstract class Animal{
    constructor(protected readonly categoria: string) { }
        mostrarCategoria(): void{
            console.log(`A categoria é: ${this.categoria}`)
        }

        abstract mostrarDetalhes(): void
        abstract idade: number
}

interface AnimalInterface {
    categoria: string;
    mostrarDetalhes(): void;
    idade?: number
}

class Gato extends Animal {
    constructor(public nome: string, public idade: number){
        super("Mamifero")
    }

    mostrarDetalhes(): void {
        console.log("Mostrar detalhe do chamado.")
    }
}

class Cachorro implements AnimalInterface {
    constructor(public categoria: string, public readonly nome: string, public idade: number) {}

    mostrarDetalhes() {
        console.log("Mostrar detalhes de cachorro")
        console.log(this.categoria)
        console.log(this.nome)
        console.log(this.idade)
    }
}

const mingal = new Gato("Mingal", 6)
console.log(mingal)

const duke = new Cachorro("Mamífero", "Duke", 8)