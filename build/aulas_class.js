"use strict";
class Pessoa {
    constructor(n, a, i, m, tb, bi) {
        this.nome = n;
        this.apelido = a;
        this.idade = i;
        this.morada = m;
        this.typeBi = tb;
        this.bi = bi;
    }
}
let alunoFulano = new Pessoa('AlunoX', 'ApelidoX', 20, 'MoradaX', 'CC', 104343);
console.table(alunoFulano);
console.log(alunoFulano.typeBi);
