"use strict";
class Pessoa2 {
    constructor(n, a, i) {
        this.nome = n;
        this.apleido = a;
        this.idade = i;
    }
    fazerAniversario() {
        this.idade++;
    }
    saudacao() {
        console.log(`Seja bem-vindo a aulas sr/a ${this.nome} ${this.apleido}`);
    }
}
let filemena = new Pessoa2('Filo', 'Co', 5);
console.table(filemena);
console.log('Idade :: ', filemena.idade);
filemena.fazerAniversario();
console.table(filemena);
console.log('Idade :: ', filemena.idade);
filemena.saudacao();
