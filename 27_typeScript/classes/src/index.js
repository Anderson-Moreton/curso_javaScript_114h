"use strict";
console.log("Olá Mundo");
// Mais Longa
// class Animal {
//     categoria: string
//     constructor(categoria: string) {
//         this.categoria = categoria
//     }
// }
// Mais Curta
class Animal {
    constructor(categoria) {
        this.categoria = categoria;
    }
    mostrarCategoria() {
        console.log(`A categoria é: ${this.categoria}`);
    }
}
class Gato extends Animal {
    constructor(nome) {
        super("Mamífero");
        this.nome = nome;
    }
    mostrarDetalhes() {
        console.log(this.nome, this.categoria);
    }
}
class Cachorro extends Animal {
    constructor(_nome) {
        super("Mamífero");
        this._nome = _nome;
    }
    mostrarDetalhes() {
        console.log(this._nome, this.categoria);
    }
    get nome() {
        console.log("Get chamado");
        return this._nome;
    }
    set nome(n) {
        console.log("Set chamado");
        this.nome = n;
    }
}
// const animal = new Animal("Mamífero")
// console.log(animal)
// animal.mostrarCategoria()
// // animal.categoria = "Categoria editada por clasee"
// console.log(animal)
const mingal = new Gato("Mingal");
console.log(mingal);
// mingal.nome = "Nome Alterado"
console.log(mingal);
const duke = new Cachorro("Duke");
console.log(duke);
duke.mostrarDetalhes();
duke.mostrarCategoria();
class Cliente {
    constructor() {
        this._listaAnimais = [];
        this._tempListaAnimais = [];
    }
    adicionarAnimais(...animais) {
        this._listaAnimais.push(...animais);
        this._tempListaAnimais.length = 0;
        this._tempListaAnimais = [...this._listaAnimais];
    }
    get listaAnimais() {
        return [...this._tempListaAnimais];
    }
}
const anderson = new Cliente();
anderson.adicionarAnimais(duke, mingal);
// anderson.listaAnimais.pop() private não deixa alterar
anderson.listaAnimais.length = 0;
console.log(anderson);
