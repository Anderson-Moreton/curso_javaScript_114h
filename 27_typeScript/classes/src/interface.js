"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(categoria) {
        this.categoria = categoria;
    }
    mostrarCategoria() {
        console.log(`A categoria é: ${this.categoria}`);
    }
}
exports.Animal = Animal;
class Gato extends Animal {
    constructor(nome, idade) {
        super("Mamifero");
        this.nome = nome;
        this.idade = idade;
    }
    mostrarDetalhes() {
        console.log("Mostrar detalhe do chamado.");
    }
}
const mingal = new Gato("Mingal", 6);
console.log(mingal);
