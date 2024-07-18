"use strict";
class Pessoa {
    constructor() {
        this.nome = '';
        this.apelido = '';
        this.idade = 0;
        this.sexo = '';
        this.dataDeNacimento = '';
    }
    saudacao() {
        console.log(`Seja Bemvindo ${this.nome}`);
    }
    fazerAniversario() {
        throw new Error("Method not implemented.");
    }
}
let pesoaFulano;
pesoaFulano = new Pessoa();
pesoaFulano.nome = 'Amilcar';
pesoaFulano.apelido = 'Tchuda';
pesoaFulano.idade = 20;
pesoaFulano.sexo = 'M';
pesoaFulano.dataDeNacimento = '01-05-2021';
pesoaFulano.saudacao();
console.log('Pessoa :: ', pesoaFulano);
