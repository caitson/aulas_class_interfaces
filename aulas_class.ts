class Pessoa {
    nome: string;
    apelido: string;
    idade: number;
    morada: string;
    typeBi: string;
    bi: number;

    constructor(
        n: string, 
        a: string, 
        i: number, 
        m: string, 
        tb: string, 
        bi: number
    ){
        this.nome = n;
        this.apelido = a;
        this.idade = i;
        this.morada = m;
        this.typeBi = tb;
        this.bi = bi;
    }
}

let alunoFulano:Pessoa = new Pessoa('AlunoX', 'ApelidoX', 20, 'MoradaX', 'CC', 104343)
console.table(alunoFulano)
console.log(alunoFulano.typeBi)
